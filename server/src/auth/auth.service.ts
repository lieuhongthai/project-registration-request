import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { Log4jsLogger } from '@nestx-log4js/core';

// ** Ldap
import { authenticate } from 'ldap-authentication';
import { TConfigService } from 'src/@core/configs/configuration';
import { RoleEnum } from 'src/@core/constants';
import { Roles } from 'src/@core/model/roles/roles.model';
import { Users } from 'src/@core/model/users/user.model';
import { TUserAuth } from 'src/types/auth.type';

@Injectable()
export class AuthService {
  protected cookieName = '__auth_';
  constructor(
    private configService: ConfigService<TConfigService>,
    private logger: Log4jsLogger,
    private jwtService: JwtService,
    @InjectModel(Users) private userModel: typeof Users,
    @InjectModel(Roles) private roleModel: typeof Roles,
  ) {}

  getCookieName() {
    return this.cookieName;
  }

  async login(email: string, password: string, fullName: string): Promise<TUserAuth> {
    const { ldapOpts, userDn } = this.configService.get('ldapOpts');

    const nodeEnv = this.configService.get('nodeEnv');

    if (nodeEnv === 'production') {
      try {
        await authenticate({ ldapOpts, userDn, username: email, userPassword: password }).catch(() => {
          throw new UnauthorizedException();
        });
      } catch (error) {
        this.logger.error(error, AuthService.name);
        throw new UnauthorizedException();
      }
    }

    const [user, isCreated] = await this.userModel.findOrCreate({
      where: { email },
      defaults: { email, fullName },
      include: [{ model: Roles, as: 'roles' }],
    });

    if (isCreated) {
      const userRole = await this.roleModel.findOne({ where: { name: RoleEnum.USER } });
      if (userRole) await user.setRoles([userRole]);

      return {
        id: user.id,
        email: email,
        fullName: fullName,
        roles: [RoleEnum.USER],
      };
    }

    const roles = (await user.getRoles()).map((role) => role.name as RoleEnum);

    return {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      roles: roles,
    };
  }

  verifyToken(token: string): TUserAuth {
    try {
      const secretKey = this.configService.get('secretKeyJwt');

      return this.jwtService.verify(token, { secret: secretKey });
    } catch (error) {
      this.logger.error(error, AuthService.name);
      throw new UnauthorizedException();
    }
  }

  async refreshToken(_token: string) {}

  generateToken(user: TUserAuth) {
    const secretKey = this.configService.get('secretKeyJwt');

    return { access_token: this.jwtService.sign(user, { secret: secretKey }) };
  }
}

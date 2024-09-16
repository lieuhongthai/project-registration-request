import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/sequelize';

// ** Ldap
import { authenticate } from 'ldap-authentication';
import { Roles } from 'src/@core/model/roles/roles.model';
import { Users } from 'src/@core/model/users/user.model';

@Injectable()
export class AuthService {
  @InjectModel(Users) userModel: typeof Users;
  @InjectModel(Users) roleModel: typeof Roles;

  constructor(private configService: ConfigService) {
    //
  }

  async login(email: string, password: string) {
    const { ldapOpts, userDn } = this.configService.get('ldapOpts');

    const [user, isCreated] = await this.userModel.findOrCreate({ where: { email }, defaults: { email } });

    if (isCreated) {
      const userRole = await this.roleModel.findOne({ where: { name: 'user' } });

      user.setRoles([userRole]);
    }

    // const user = await authenticate({ ldapOpts, userDn, username, userPassword: password });

    return user;
  }
}

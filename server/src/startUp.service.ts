import { Injectable, OnModuleInit } from '@nestjs/common';
import { Users } from 'src/@core/model/users/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';
import { TConfigService } from './@core/configs/configuration';
import { Roles } from './@core/model/roles/roles.model';
import { dataSeerRole } from './@core/constants';

@Injectable()
export class StartUpService implements OnModuleInit {
  constructor(
    @InjectModel(Users) private userModel: typeof Users,

    @InjectModel(Roles) private roleModel: typeof Roles,

    private configService: ConfigService<TConfigService>,
  ) {}
  async onModuleInit() {
    const isSeeder = this.configService.get('isSeeder');

    if (isSeeder) {
      await this.roleModel.bulkCreate(dataSeerRole, { ignoreDuplicates: true });
    }

    console.log('The module has been initialized.');
  }
}

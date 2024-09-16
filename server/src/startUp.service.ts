import { Injectable, OnModuleInit } from '@nestjs/common';
import { Users } from 'src/@core/model/users/user.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class StartUpService implements OnModuleInit {
  constructor(@InjectModel(Users) private userModel: typeof Users) {
    //
  }

  //   @InjectModel(Users)
  //   private userModel: typeof Users;
  async onModuleInit() {
    console.log('The module has been initialized.');

    const users = await this.userModel.findAll();

    // this.userModel.def

    console.table(users);
  }
}

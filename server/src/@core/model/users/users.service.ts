import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './user.model';
import ModelService from '../common/model.service';
import { Roles } from '../roles/roles.model';

@Injectable()
export class UsersService extends ModelService<Users> {
  constructor(@InjectModel(Users) private userModel: typeof Users) {
    super(userModel);
  }

  async getUserAndRoles(): Promise<Users[]> {
    return await this.userModel.findAll({
      include: [
        {
          model: Roles,
          attributes: ['name'],
          as: 'roles',
        },
      ],
    });
  }
}

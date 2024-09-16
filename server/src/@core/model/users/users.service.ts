import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './user.model';
import { Roles } from '../roles/roles.model';

@Injectable()
export class UsersService {
  @InjectModel(Users)
  private userModel: typeof Users;

  @InjectModel(Roles)
  private roleModel: typeof Roles;

  async findAll(): Promise<Users[]> {
    return this.userModel.findAll({
      include: [{ model: Roles, as: 'roles' }],
    });
  }

  async createUser() {
    const user = { firstName: 'firstName', lastName: 'lastName' };

    const created = await this.userModel.create(user);

    if (created) {
      const id = created.id;
      created.firstName = `${created.firstName}-${id}`;
      created.lastName = `${created.lastName}-${id}`;
      await created.save();
    }

    return created;
  }

  findOne(id: string): Promise<Users> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async getAllRoles() {
    return this.roleModel.findAll();
  }
}

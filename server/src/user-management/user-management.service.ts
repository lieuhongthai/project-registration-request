import { Injectable } from '@nestjs/common';
import { UpdateUserManagementDto } from './dto/update-user-management.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/@core/model/users/user.model';
import { Roles } from 'src/@core/model/roles/roles.model';
import { Op } from 'sequelize';

@Injectable()
export class UserManagementService {
  constructor(@InjectModel(Users) private userModel: typeof Users) {}
  create() {
    return 'This action adds a new userManagement';
  }

  async getUserAndRolesByName(fullName?: string | null | undefined): Promise<Users[]> {
    const condition = {};

    if (fullName) condition['fullName'] = { [Op.like]: `%${fullName}%` };
    return await this.userModel.findAll({
      where: condition,
      include: [
        {
          model: Roles,
          attributes: ['name'],
          as: 'roles',
        },
      ],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} userManagement`;
  }

  update(id: number, updateUserManagementDto: UpdateUserManagementDto) {
    return `This action updates a #${id} userManagement`;
  }

  async remove(id: number) {
    return await this.userModel.update({ isDeleted: true }, { where: { id } });
  }
}

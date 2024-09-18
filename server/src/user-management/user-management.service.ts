import { Injectable } from '@nestjs/common';
import { UpdateUserManagementDto } from './dto/update-user-management.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/@core/model/users/user.model';
import { Roles } from 'src/@core/model/roles/roles.model';
import { Op } from 'sequelize';

@Injectable()
export class UserManagementService {
  constructor(
    @InjectModel(Users) private userModel: typeof Users,
    @InjectModel(Roles) private roleModel: typeof Roles,
  ) {}
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

      order: [[{ model: Roles, as: 'roles' }, 'id', 'ASC']],
    });
  }

  async findOne(id: number) {
    if (id) {
      const user = await this.userModel.findOne({
        where: { id },
        include: [
          {
            model: Roles,
            attributes: ['name'],
            as: 'roles',
          },
        ],
      });

      if (user) {
        return {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          roles: user.roles.map((role) => role.name),
        };
      }
    }
    return null;
  }

  async update(id: number, updateUserManagementDto: UpdateUserManagementDto) {
    const user = await this.userModel.findOne({ where: { id, isDeleted: false } });

    if (user) {
      const roles = await this.roleModel.findAll({ where: { name: updateUserManagementDto.roles } });
      user.fullName = updateUserManagementDto.fullName;
      user.email = updateUserManagementDto.email;
      await user.setRoles(roles);
      await user.save();
      return user;
    }

    return null;
  }

  async remove(id: number) {
    return await this.userModel.update({ isDeleted: true }, { where: { id } });
  }
}

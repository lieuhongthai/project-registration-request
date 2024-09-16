import { Injectable } from '@nestjs/common';
import ModelService from '../common/model.service';
import { Roles } from './roles.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RolesService extends ModelService<Roles> {
  constructor(@InjectModel(Roles) private rolesModel: typeof Roles) {
    super(rolesModel);
  }

  findAll() {
    return this.rolesModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}

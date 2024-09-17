import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op, WhereOptions } from 'sequelize';
import { Roles } from 'src/@core/model/roles/roles.model';
import { Users } from 'src/@core/model/users/user.model';
import { ProjectRegistration } from 'src/project-registration/entities/project-registration.entity';
import { ApproveProjectFiltersDto } from './dto/approve-project-filters.dto';
import { UpdateApproveProjectDto } from './dto/update-approve-project.dto';

@Injectable()
export class ApproveProjectsService {
  constructor(
    @InjectModel(ProjectRegistration)
    private projectRegistrationModel: typeof ProjectRegistration,
  ) {}

  async findAll(query: ApproveProjectFiltersDto) {
    const where: WhereOptions<ProjectRegistration> = {};

    if (query.department !== 'All') {
      where.department = query.department;
    }

    if (query.project_name) {
      where.name = { [Op.iLike]: `%${query.project_name}%` };
    }

    if (query.user) {
      where['$user.full_name$'] = query.user;
    }

    const { rows, count } = await this.projectRegistrationModel.findAndCountAll({
      where,
      include: [{ model: Users, include: [Roles] }],
      order: [['created_at', 'DESC']],
    });

    return { data: rows, count };
  }

  async findOne(id: number): Promise<ProjectRegistration> {
    const projectRegistration = await this.projectRegistrationModel.findByPk(id);

    if (!projectRegistration) throw new NotFoundException();

    return projectRegistration;
  }

  update(id: number, updateApproveProjectDto: UpdateApproveProjectDto) {
    return `This action updates a #${id} approveProject`;
  }
}

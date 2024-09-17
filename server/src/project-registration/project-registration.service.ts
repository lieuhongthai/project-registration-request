import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProjectRegistrationDto } from './dto/create-project-registration.dto';
import { UpdateProjectRegistrationDto } from './dto/update-project-registration.dto';
import { ProjectRegistration } from './entities/project-registration.entity';
import { FilterRequestDto } from './dto/filter-request.dto';
import { Op } from 'sequelize';

@Injectable()
export class ProjectRegistrationService {
  @InjectModel(ProjectRegistration)
  private projectModel: typeof ProjectRegistration;

  async create(createProjectRegistrationDto: CreateProjectRegistrationDto): Promise<ProjectRegistration> {
    return await ProjectRegistration.create({ ...createProjectRegistrationDto });
  }

  async findAll(filter: FilterRequestDto): Promise<ProjectRegistration[]> {
    return await this.projectModel.findAll({
      where: {
        department: {
          [Op.like]: `%${filter?.department}%`,
        },
        purpose: {
          [Op.like]: `%${filter?.purpose}%`,
        },
      },
    });
  }

  async findOne(id: number): Promise<ProjectRegistration> {
    return await this.projectModel.findByPk(id);
  }

  async update(id: number, updateProjectRegistrationDto: UpdateProjectRegistrationDto): Promise<ProjectRegistration> {
    const project = await this.findOne(id);
    project.set({
      ...updateProjectRegistrationDto,
    });
    return await project.save();
  }

  async remove(id: number): Promise<void> {
    const project = await this.findOne(id);
    project.destroy();
  }
}

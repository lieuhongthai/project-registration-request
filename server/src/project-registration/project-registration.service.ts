import { Injectable } from '@nestjs/common';
import { CreateProjectRegistrationDto } from './dto/create-project-registration.dto';
import { UpdateProjectRegistrationDto } from './dto/update-project-registration.dto';
import { ProjectRegistration } from './entities/project-registration.entity';

@Injectable()
export class ProjectRegistrationService {
  create(createProjectRegistrationDto: CreateProjectRegistrationDto) {
    const created = ProjectRegistration.create({ ...createProjectRegistrationDto });
    return created;
  }

  findAll() {
    return `This action returns all projectRegistration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectRegistration`;
  }

  update(id: number, updateProjectRegistrationDto: UpdateProjectRegistrationDto) {
    return `This action updates a #${id} projectRegistration`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectRegistration`;
  }
}

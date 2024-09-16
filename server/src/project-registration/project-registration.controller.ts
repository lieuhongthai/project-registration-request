import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectRegistrationService } from './project-registration.service';
import { CreateProjectRegistrationDto } from './dto/create-project-registration.dto';
import { UpdateProjectRegistrationDto } from './dto/update-project-registration.dto';

@Controller('project-registration')
export class ProjectRegistrationController {
  constructor(private readonly projectRegistrationService: ProjectRegistrationService) {}

  @Post()
  create(@Body() createProjectRegistrationDto: CreateProjectRegistrationDto) {
    return this.projectRegistrationService.create(createProjectRegistrationDto);
  }

  @Get()
  findAll() {
    return this.projectRegistrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectRegistrationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectRegistrationDto: UpdateProjectRegistrationDto) {
    return this.projectRegistrationService.update(+id, updateProjectRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectRegistrationService.remove(+id);
  }
}

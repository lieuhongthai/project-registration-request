import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PlainToClassPipe } from 'src/@core/pipes/plain-to-class.pipe';
import { ApproveProjectsService } from './approve-projects.service';
import { ApproveProjectFiltersDto } from './dto/approve-project-filters.dto';
import { CreateApproveProjectDto } from './dto/create-approve-project.dto';
import { UpdateApproveProjectDto } from './dto/update-approve-project.dto';

@Controller('v1/approve-projects')
export class ApproveProjectsController {
  constructor(private readonly approveProjectsService: ApproveProjectsService) {}

  @Post()
  create(@Body() createApproveProjectDto: CreateApproveProjectDto) {
    return this.approveProjectsService.create(createApproveProjectDto);
  }

  @Get()
  async findAll(@Query(PlainToClassPipe) query: ApproveProjectFiltersDto) {
    return await this.approveProjectsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.approveProjectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApproveProjectDto: UpdateApproveProjectDto) {
    return this.approveProjectsService.update(+id, updateApproveProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.approveProjectsService.remove(+id);
  }
}

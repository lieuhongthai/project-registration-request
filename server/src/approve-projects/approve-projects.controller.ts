import { Body, Controller, Get, HttpCode, Param, Patch, Query } from '@nestjs/common';
import { ParseIdPipe } from 'src/@core/pipes/parse-id.pipe';
import { PlainToClassPipe } from 'src/@core/pipes/plain-to-class.pipe';
import { ApproveProjectsService } from './approve-projects.service';
import { ApproveProjectFiltersDto } from './dto/approve-project-filters.dto';
import { UpdateApproveProjectDto } from './dto/update-approve-project.dto';

@Controller('v1/approve-projects')
export class ApproveProjectsController {
  constructor(private readonly approveProjectsService: ApproveProjectsService) {}

  @HttpCode(200)
  @Get()
  async findAll(@Query(PlainToClassPipe) query: ApproveProjectFiltersDto) {
    return await this.approveProjectsService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIdPipe) id: number) {
    return await this.approveProjectsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIdPipe) id: number, @Body() payload: UpdateApproveProjectDto) {
    return this.approveProjectsService.update(id, payload);
  }
}

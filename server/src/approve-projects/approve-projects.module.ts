import { Module } from '@nestjs/common';
import { ApproveProjectsService } from './approve-projects.service';
import { ApproveProjectsController } from './approve-projects.controller';
import { ProjectRegistrationModule } from 'src/project-registration/project-registration.module';

@Module({
  imports: [ProjectRegistrationModule],
  controllers: [ApproveProjectsController],
  providers: [ApproveProjectsService],
})
export class ApproveProjectsModule {}

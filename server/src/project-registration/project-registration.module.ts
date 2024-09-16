import { Module } from '@nestjs/common';
import { ProjectRegistrationService } from './project-registration.service';
import { ProjectRegistrationController } from './project-registration.controller';

@Module({
  controllers: [ProjectRegistrationController],
  providers: [ProjectRegistrationService],
})
export class ProjectRegistrationModule {}

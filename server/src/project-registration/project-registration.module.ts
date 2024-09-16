import { Module } from '@nestjs/common';
import { ProjectRegistrationService } from './project-registration.service';
import { ProjectRegistrationController } from './project-registration.controller';
import { ProjectRegistration } from './entities/project-registration.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ProjectRegistration])],
  controllers: [ProjectRegistrationController],
  providers: [ProjectRegistrationService],
  exports: [SequelizeModule],
})
export class ProjectRegistrationModule {}

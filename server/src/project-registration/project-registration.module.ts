import { Module } from '@nestjs/common';
import { ProjectRegistrationService } from './project-registration.service';
import { ProjectRegistrationController } from './project-registration.controller';
import { ProjectRegistration } from './entities/project-registration.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { AttachmentModule } from 'src/attachment/attachment.module';

@Module({
  imports: [SequelizeModule.forFeature([ProjectRegistration]), AttachmentModule],
  controllers: [ProjectRegistrationController],
  providers: [ProjectRegistrationService],
  exports: [SequelizeModule],
})
export class ProjectRegistrationModule {}

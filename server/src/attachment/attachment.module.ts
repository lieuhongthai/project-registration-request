import { Module } from '@nestjs/common';
import { AttachmentService } from './attachment.service';
import { AttachmentController } from './attachment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Attachment } from './entities/attachment.entity';

@Module({
  imports: [SequelizeModule.forFeature([Attachment])],
  controllers: [AttachmentController],
  providers: [AttachmentService],
  exports: [SequelizeModule, AttachmentService],
})
export class AttachmentModule {}

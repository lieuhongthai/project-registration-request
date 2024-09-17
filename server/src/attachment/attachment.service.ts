import { Injectable } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Attachment } from './entities/attachment.entity';

@Injectable()
export class AttachmentService {
  @InjectModel(Attachment)
  private attachmentModel: typeof Attachment;

  async create(createAttachmentDto: CreateAttachmentDto): Promise<Attachment> {
    return await this.attachmentModel.create({ ...createAttachmentDto });
  }

  async createManyAttachment(createAttachmentDtoList: CreateAttachmentDto[]): Promise<Attachment[]> {
    return await this.attachmentModel.bulkCreate(
      createAttachmentDtoList.map((dto) => {
        return { ...dto };
      }),
    );
  }

  async findAll(requestId: number) {
    return await this.attachmentModel.findAll({
      where: {
        project_registration_id: requestId,
      },
    });
  }
}

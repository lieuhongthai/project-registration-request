import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProjectRegistrationDto } from './dto/create-project-registration.dto';
import { UpdateProjectRegistrationDto } from './dto/update-project-registration.dto';
import { ProjectRegistration } from './entities/project-registration.entity';
import { FilterRequestDto } from './dto/filter-request.dto';
import { Op } from 'sequelize';
import { AttachmentService } from 'src/attachment/attachment.service';
import { HistoryService } from 'src/history/history.service';

@Injectable()
export class ProjectRegistrationService {
  constructor(
    private readonly attachmentService: AttachmentService,
    private readonly historyService: HistoryService,
    @InjectModel(ProjectRegistration)
    private projectModel: typeof ProjectRegistration,
  ) {}

  async create(createProjectRegistrationDto: CreateProjectRegistrationDto): Promise<ProjectRegistration> {
    const requestCreated = await ProjectRegistration.create({ ...createProjectRegistrationDto });
    const attachmentsCreated = await this.attachmentService.createManyAttachment(
      createProjectRegistrationDto.attachments.map((attachment) => {
        return {
          fileName: attachment.filename,
          filePath: attachment.filename,
          fileType: attachment.filename,
          fileIcon: attachment.filename,
          fileUrl: attachment.filename,
          projectRegistrationId: requestCreated.id,
        };
      }),
    );
    return requestCreated;
  }

  async findAll(filter: FilterRequestDto): Promise<ProjectRegistration[]> {
    return await this.projectModel.findAll({
      where: {
        department: {
          [Op.like]: `%${filter?.department}%`,
        },
        purpose: {
          [Op.like]: `%${filter?.purpose}%`,
        },
      },
    });
  }

  async findOne(id: number): Promise<ProjectRegistration> {
    return await this.projectModel.findByPk(id);
  }

  async update(id: number, updateProjectRegistrationDto: UpdateProjectRegistrationDto): Promise<ProjectRegistration> {
    const project = await this.findOne(id);
    project.set({
      ...updateProjectRegistrationDto,
    });
    return await project.save();
  }

  async remove(id: number): Promise<void> {
    const project = await this.findOne(id);
    project.destroy();
  }
}

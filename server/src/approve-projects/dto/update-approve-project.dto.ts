import { PartialType } from '@nestjs/swagger';
import { CreateApproveProjectDto } from './create-approve-project.dto';

export class UpdateApproveProjectDto extends PartialType(CreateApproveProjectDto) {}

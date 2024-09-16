import { PartialType } from '@nestjs/swagger';
import { CreateProjectRegistrationDto } from './create-project-registration.dto';

export class UpdateProjectRegistrationDto extends PartialType(CreateProjectRegistrationDto) {}

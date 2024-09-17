import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { AttachmentRequestDto } from './attachment-request.dto';

export class CreateProjectRegistrationDto {
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @MaxLength(100)
  @ApiProperty()
  department: string;

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @MaxLength(100)
  @ApiProperty()
  projectName: string;

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @MaxLength(500)
  @ApiProperty()
  purpose: string;

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @MaxLength(500)
  @ApiProperty()
  scopeOfUse: string;

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @MaxLength(2000)
  @ApiProperty()
  demand: string;

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @MaxLength(2000)
  @ApiProperty()
  contactInformation: string;

  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @ApiProperty()
  implementationDate: string;

  @ApiProperty()
  status: number;

  @ApiProperty()
  isDraft: number;

  @ApiProperty()
  attachments: AttachmentRequestDto[];
}

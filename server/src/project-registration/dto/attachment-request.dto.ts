import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class AttachmentRequestDto {
  @ApiProperty()
  @MaxLength(255)
  filename: string;

  @ApiProperty()
  @MaxLength(255)
  originalName: string;
}

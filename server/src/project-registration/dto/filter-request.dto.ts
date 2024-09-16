import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class FilterRequestDto {
  @ApiProperty()
  @MaxLength(255)
  department: string;

  @ApiProperty()
  @MaxLength(255)
  purpose: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class FilterRequestDto {
  @ApiProperty()
  @MaxLength(255)
  requestId: number;
}

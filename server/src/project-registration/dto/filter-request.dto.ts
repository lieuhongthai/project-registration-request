import { ApiProperty } from '@nestjs/swagger';

export class FilterRequest {
  @ApiProperty()
  department: string;

  @ApiProperty()
  purpose: string;
}

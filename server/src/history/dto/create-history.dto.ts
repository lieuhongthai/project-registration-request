import { ApiProperty } from '@nestjs/swagger';

export class CreateHistoryDto {
  @ApiProperty()
  comment: string;

  @ApiProperty()
  statusId: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  projectRegistrationId: number;
}

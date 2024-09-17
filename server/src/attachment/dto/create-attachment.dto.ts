import { ApiProperty } from '@nestjs/swagger';

export class CreateAttachmentDto {
  @ApiProperty()
  fileName: string;

  @ApiProperty()
  filePath: string;

  @ApiProperty()
  fileType: string;

  @ApiProperty()
  fileIcon: string;

  @ApiProperty()
  fileUrl: string;

  @ApiProperty()
  projectRegistrationId: number;
}

import { IsNumber, IsInt, IsNumberString } from 'class-validator';

export class DeleteUserManagementDto {
  @IsNumberString()
  id: number;
}

import { IsOptional, IsString, MaxLength } from 'class-validator';

export class GetUserManagementDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  fullName: string;
}

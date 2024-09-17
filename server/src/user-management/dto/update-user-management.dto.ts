import { ArrayMinSize, ArrayNotEmpty, IsArray, IsEmail, IsString, MaxLength } from 'class-validator';

export class UpdateUserManagementDto {
  @IsString()
  @MaxLength(100)
  fullName: string;

  @IsString()
  @MaxLength(255)
  @IsEmail()
  email: string;

  @IsArray({ message: 'Roles must be an array' })
  @ArrayNotEmpty({ message: 'Roles array should not be empty' })
  @IsString({ each: true, message: 'Each role must be a string' })
  @ArrayMinSize(1, { message: 'Roles array must contain at least one role' })
  roles: string[];
}

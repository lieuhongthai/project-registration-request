import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDefined, IsNotEmpty, IsNumber, IsString, Max, MaxLength } from 'class-validator';

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

  @IsNotEmpty()
  @IsDefined()
  @IsNumber()
  @ApiProperty()
  status: number;

  @IsNumber()
  @ApiProperty()
  isDraft: number;
}

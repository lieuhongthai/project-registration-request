import { ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class ApproveProjectFiltersDto {
  @ApiPropertyOptional()
  @Expose()
  @IsString()
  @Transform(({ value }) => (value ? value : 'All'))
  @MaxLength(255)
  @IsOptional()
  department: string;

  @ApiPropertyOptional()
  @Expose()
  @IsString()
  @MaxLength(100)
  @IsOptional()
  project_name: string;

  @ApiPropertyOptional()
  @Expose()
  @IsString()
  @MaxLength(100)
  @IsOptional()
  user: string;
}

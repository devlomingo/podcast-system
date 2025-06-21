import { IsString, IsEnum, IsOptional, IsInt, IsDateString } from 'class-validator';
import { ProgramType } from '@modules/program/enums/program-type.enum';

export class UpdateProgramDto {
  @IsOptional()
  @IsEnum(ProgramType)
  type?: ProgramType;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsInt()
  duration?: number;

  @IsOptional()
  @IsDateString()
  published_at?: string;

  @IsOptional()
  @IsString()
  category?: string;
}

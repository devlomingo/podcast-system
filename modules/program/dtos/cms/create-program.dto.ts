import { IsEnum, IsObject, IsOptional, IsString, IsInt, IsDateString } from 'class-validator';
import { ProgramType } from '@modules/program/enums/program-type.enum';

export class CreateProgramDto {
  @IsEnum(ProgramType)
  type: ProgramType;

  @IsObject()
  title: Record<string, string>;

  @IsOptional()
  @IsObject()
  description?: Record<string, string>;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsInt()
  duration?: number;

  @IsOptional()
  @IsDateString()
  published_at?: Date;
}

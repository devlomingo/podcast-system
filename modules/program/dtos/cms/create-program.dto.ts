import { IsEnum, IsOptional, IsString, IsInt, IsDateString } from 'class-validator';
import { ProgramType } from '@modules/program/enums/program-type.enum';

export class CreateProgramDto {
  @IsEnum(ProgramType, { message: 'Invalid program type' })
  type: ProgramType;

  @IsString({ message: 'Title must be a string' })
  title: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;

  @IsOptional()
  @IsString({ message: 'Language must be a string' })
  language?: string;

  @IsOptional()
  @IsInt({ message: 'Duration must be an integer' })
  duration?: number;

  @IsOptional()
  @IsDateString({}, { message: 'Published date must be a valid ISO date string' })
  published_at?: string;

  @IsOptional()
  @IsString({ message: 'Category must be a string' })
  category?: string;
}

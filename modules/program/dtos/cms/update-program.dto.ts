import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramDto } from '@modules/program/dtos/create-program.dto';

export class UpdateProgramDto extends PartialType(CreateProgramDto) {}

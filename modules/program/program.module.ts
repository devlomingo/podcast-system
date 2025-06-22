import { Module } from '@nestjs/common';
import { ImportProgramsCommand } from '@modules/program/commands/import-programs.command';

@Module({
  providers: [ImportProgramsCommand],
})
export class ProgramModule {}

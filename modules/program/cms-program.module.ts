import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Program } from '@modules/program/entities/program.entity';
import { ProgramService } from '@modules/program/services/program.service';
import { ProgramsController } from '@modules/program/controllers/cms/programs.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Program]),
  ],
  controllers: [ProgramsController],
  providers: [ProgramService],
})
export class CMSProgramModule {}

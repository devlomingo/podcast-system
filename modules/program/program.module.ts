import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramsService } from '@modules/program/services/program.service';
import { Program } from './entities/program.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Program])],
  providers: [ProgramsService],
  exports: [ProgramsService, TypeOrmModule],
})
export class ProgramsModule {}

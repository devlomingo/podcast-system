import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Program } from '@modules/program/entities/program.entity';
import { ProgramsService } from '@modules/program/services/program.service';
import { CMSProgramsController } from '@modules/program/controllers/cms/programs.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Program])
  ],
  controllers: Object.values(DiscoveryControllers),
  providers: [ProgramsService],
})
export class CMSProgramsModule {}

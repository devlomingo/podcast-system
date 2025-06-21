import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Program } from '@modules/program/entities/program.entity';
import { ProgramService } from '@modules/program/services/program.service';
import { DiscoveryController } from '@modules/program/controllers/discovery/discovery.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Program])],
  controllers: [DiscoveryController],
  providers: [ProgramService],
})
export class DiscoveryProgramModule {}

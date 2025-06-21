import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Program } from '../entities/program.entity';
import { CreateProgramDto } from '@modules/program/dtos/create-program.dto';
import { UpdateProgramDto } from '@modules/program/dtos/update-program.dto';

@Injectable()
export class ProgramsService {
  constructor(
    @InjectRepository(Program)
    private readonly programRepo: Repository<Program>,
  ) {}

  async findAll(): Promise<Program[]> {
    return this.programRepo.find({
      where: { deleted_at: null },
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Program> {
    const program = await this.programRepo.findOne({
      where: { id, deleted_at: null },
    });
    if (!program) {
      throw new NotFoundException(`Program with id ${id} not found`);
    }
    return program;
  }

  async create(data: CreateProgramDto): Promise<Program> {
    const program = this.programRepo.create(data);
    return this.programRepo.save(program);
  }

  async update(id: number, data: UpdateProgramDto): Promise<Program> {
    const program = await this.findOne(id);
    const updated = this.programRepo.merge(program, data);
    return this.programRepo.save(updated);
  }

  async remove(id: number): Promise<void> {
    const program = await this.findOne(id);
    await this.programRepo.softRemove(program);
  }
}

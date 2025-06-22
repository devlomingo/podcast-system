import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Program } from '@modules/program/entities/program.entity';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(Program)
    private readonly programRepository: Repository<Program>,
  ) {}

  findAll() {
    return this.programRepository.find();
  }

  findOne(id: number): Promise<Program> {
    return this.programRepository.findOneBy({ id });
  }

  create(data: Partial<Program>): Promise<Program> {
    const program = this.programRepository.create(data);
    return this.programRepository.save(program);
  }
  async update(id: number, data: Partial<Program>): Promise<Program> {
    const existing = await this.programRepository.findOneOrFail({ where: { id } });
    const updated = this.programRepository.merge(existing, data);
    return this.programRepository.save(updated);
  }

  remove(id: number) {
    return this.programRepository.softDelete(id);
  }
}

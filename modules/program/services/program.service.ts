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

  update(id: number, data: Partial<Program>) {
    return this.programRepository.update(id, data);
  }

  remove(id: number) {
    return this.programRepository.delete(id);
  }
}

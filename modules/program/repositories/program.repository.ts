import { EntityRepository } from 'typeorm';
import { Program } from '@modules/program/entities/program.entity';
import { DataSource, Repository } from 'typeorm';

export class ProgramRepository extends Repository<Program> {
  constructor(dataSource: DataSource) {
    super(Program, dataSource.createEntityManager());
  }

  async findActiveById(id: number): Promise<Program | null> {
    return this.findOne({
      where: { id, deleted_at: null },
    });
  }

  async findAllActive(): Promise<Program[]> {
    return this.find({ where: { deleted_at: null } });
  }
}

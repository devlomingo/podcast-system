import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ImportProgramSourceType } from '@modules/program/enums/import-program-source-type.enum';

@Entity('import_programs')
export class ImportProgram {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'enum', enum: ImportProgramSourceType })
  source!: ImportProgramSourceType;

  @Column({ type: 'varchar', nullable: true })
  file_path?: string;

  @Column({ type: 'jsonb', nullable: true })
  metadata?: Record<string, any>;

  @Column({ type: 'boolean', default: false })
  processed!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}


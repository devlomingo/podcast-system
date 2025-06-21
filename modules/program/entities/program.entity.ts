import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { ProgramType } from '@modules/program/enums/program-type.enum';
import { ProgramCategory } from '@modules/program/entities/program-category.entity';

@Entity('programs')
export class Program {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'enum', enum: ProgramType, comment: 'نوع البرنامج' })
  type!: ProgramType;

  @Column({ type: 'jsonb', comment: 'العنوان متعدد اللغات' })
  title!: Record<string, string>;

  @Column({ type: 'jsonb', nullable: true, comment: 'الوصف متعدد اللغات' })
  description?: Record<string, string>;

  @Column({ type: 'varchar', nullable: true })
  language?: string;

  @Column({ type: 'int', nullable: true, comment: 'المدة بالدقائق' })
  duration?: number;

  @Column({ type: 'timestamp', nullable: true })
  published_at?: Date;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  @OneToMany(() => ProgramCategory, (link) => link.program)
  categories!: ProgramCategory[];
}

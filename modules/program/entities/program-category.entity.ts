import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn
} from 'typeorm';
import { Program } from './program.entity';
import { Category } from './category.entity';

@Entity('program_categories')
export class ProgramCategory {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Program, (program) => program.categories, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'program_id' })
  program!: Program;

  @ManyToOne(() => Category, (category) => category.programs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category!: Category;

  @CreateDateColumn()
  created_at!: Date;
}

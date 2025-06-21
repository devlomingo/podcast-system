import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  OneToMany
} from 'typeorm';
import { ProgramCategory } from './program-category.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'jsonb', comment: 'اسم التصنيف متعدد اللغات' })
  name!: Record<string, string>;

  @DeleteDateColumn()
  deleted_at?: Date;

  @OneToMany(() => ProgramCategory, (link) => link.category)
  programs!: ProgramCategory[];
}

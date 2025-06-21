import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { ProgramType } from '@modules/program/enums/program-type.enum';

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

  @Column({
    type: 'varchar',
    nullable: true,
    comment: `⚠️ هذا الحقل بديل مؤقت للتصنيفات.
      من المفترض أن يكون هناك علاقة Many-to-Many بين البرامج والتصنيفات عبر جدول وسيط (program_categories)،
      ولكن تم تبسيط هذا الحقل لمرحلة الـ MVP فقط لتسهيل التنفيذ وتسريع التسليم.`,
  })
  category?: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}

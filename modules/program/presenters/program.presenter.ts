import { Program } from '@modules/program/entities/program.entity';

export class ProgramPresenter {
  static transform(program: Program) {
    return {
      id: program.id,
      type: program.type,
      title: program.title,
      description: program.description ?? null,
      language: program.language ?? null,
      duration: program.duration ?? null,
      published_at: program.published_at ?? null,
      category: program.category ?? null,
      created_at: program.created_at,
      updated_at: program.updated_at,
    };
  }

  static transformList(programs: Program[]) {
    return programs.map(this.transform);
  }
}

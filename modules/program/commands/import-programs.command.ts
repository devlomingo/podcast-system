import { Command, CommandRunner } from 'nest-commander';

@Command({ name: 'import:programs', description: 'Import programs command' })
export class ImportProgramsCommand extends CommandRunner {
  async run(passedParams: string[], options?: Record<string, any>): Promise<void> {
    console.log('Import Command');
  }
}

import { Command, CommandRunner, Option } from 'nest-commander';
import { Injectable } from '@nestjs/common';

@Injectable()
@Command({ name: 'import:programs', description: 'Import programs from sources' })
export class BasicCommand extends CommandRunner {
  async run() {
    console.log('🚀 Running import:programs command...');
  }
}

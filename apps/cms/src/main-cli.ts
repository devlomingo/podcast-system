import { CommandFactory } from 'nest-commander';
import { ProgramModule } from '@modules/program/program.module';

async function bootstrap() {
  await CommandFactory.run(ProgramModule);
}
bootstrap()
  .then(async (app) => {
    console.info('command bootstrapped ...!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(`server failed to start command`, err);
    process.exit(1);
  });

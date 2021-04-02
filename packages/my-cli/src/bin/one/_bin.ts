import commander from 'commander';

import main, { OneOptions } from './index';

const program = new commander.Command('my-cli-one');

program
  .alias('tcs-build')
  .option('--test', 'test: description');

// program.action((opt) => {
//   main(opt);
// });

program.parse(process.argv);

const options: OneOptions = program.opts() as OneOptions;

main(options);

#!/usr/bin/env node

const commander = require('commander');
const pkgJson = require('../../package.json');

const program = new commander.Command('my-cli');

console.log('hello,world')

program
  .alias('mymy')
  .version(pkgJson.version)
  .command('one', 'command one')
  .command('two', 'command two')
  .command('three', 'command three')
  .command('four', 'command four')
  .parse(process.argv);

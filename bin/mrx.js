#!/usr/bin/env node
const program = require('commander');
 
program
  .version('1.0.7')
  .command('create <app-name>')
  .action(function (name) {
    require('../lib/create')(name);
  });

  program.on('--help', () => {
    
  });
 
program.parse(process.argv);
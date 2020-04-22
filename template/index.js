'use strict';

const fs = require('fs');
const ora = require('ora');
const path = require('path');
const rm = require('rimraf');
const chalk = require('chalk');
const cmd = require('commander');

const webpack = require('webpack');

cmd.option('-m, --mode [mode]', 'set mode', 'development')
  .option('-c, --conf [conf]', 'set config', './config.json')
  .parse(process.argv);

// 사용자 정의 config
var config = JSON.parse(fs.readFileSync(path.resolve(cmd.conf), 'utf8'));
process.env.mode = cmd.mode;

const webpackConfig = require('./bundler/webpack.config');

const spinner = ora('building for production...');
spinner.start();

var root_path = path.resolve(__dirname,'./dist');
new Promise((resolve,reject) => {  
  rm(root_path, err => {
    if(err) throw err;
    webpack(webpackConfig, (err, stats) => {
      spinner.stop();
      if (err) throw err;
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n');
    
      if (stats.hasErrors()) {
        console.log(chalk.red('  Build failed with errors.\n'));
        process.exit(1)
      }
    
      console.log(chalk.cyan('  Build complete.\n'));
      resolve();
    })  
  })
}).then(() => {
  // 개발자 모드일 경우에 동작
  if(process.env.mode === 'development') {
    require('./server')(config);
  }
})
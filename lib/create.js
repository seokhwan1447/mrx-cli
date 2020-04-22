
const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');

const chalk = require('chalk');

async function create (projectName) {
    const cwd = process.cwd();
    const inCurrent = projectName === '.';
    const targetDir = path.resolve(cwd, projectName || '.');
    
    // 기존 폴더가 존재할 경우의 액션
    if(fs.existsSync(targetDir)) {
        if(inCurrent) {
            const { ok } = await inquirer.prompt([{
                name:'ok',
                type:'confirm',
                message: `Generate project in current directory?`
            }])
            if(!ok) {
                return;
            }
        } else {
            const { action } = await inquirer.prompt([{
                name:'action',
                type: 'list',
                message: `Target directory ${chalk.cyan(targetDir)} already exists. Pick an action:`,
                choices: [
                    { name: 'Overwrite', value: 'overwrite' },
                    { name: 'Cancel', value: false }
                ]
            }])
            if(!action) {
                return;
            } else if(action === 'overwrite') {
                console.log(`\nRemoving ${chalk.cyan(targetDir)}...`)
                await fs.remove(targetDir)
            }
        }
    }
    fs.copySync(path.resolve(__dirname, '../template'), targetDir);
    var description = "아래의 명령어를 실행해주세요."
    var cmd01 = "cd ./" + projectName;
    var cmd02 = "npm run start";
    console.log(`${chalk.yellow(description)}`)
    console.log(`${chalk.blueBright(cmd01)}`)
    console.log(`${chalk.blueBright(cmd02)}`)
}

module.exports = (...args) => {
    return create(...args).catch(err => {
        console.log(`Created App ${chalk.cyan(targetDir)}!`)
    })
}
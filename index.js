const fs = require('fs');
const { join } = require('path');

const isNumber = n => /^\d+$/.test(n);

const isDir = dir => fs.statSync(dir).isDirectory();

const isNumberAndDir = (file, folder) => isNumber(file) && isDir(folder);

const calculate = () => {
  for (const day of fs.readdirSync(__dirname)) {
    const dayDir = join(__dirname, day);
    if (isNumberAndDir(day, dayDir)) {
      for (const part of fs.readdirSync(dayDir)) {
        const partDir = join(dayDir, part);
        if (isNumberAndDir(part, partDir)) {
          const exec = require(join(partDir, 'index.js'));
          const result = exec(fs.readFileSync(join(partDir, 'input'), 'utf-8'));
          console.log(`Day: ${day}; Part ${part} => ${result}`);
          fs.writeFileSync(join(partDir, 'result'), result);
        }
      }
    }
  }
};

calculate();

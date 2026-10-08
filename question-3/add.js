// Question 3 (part 2): Create log files
// Creates the Logs directory if needed, switches the process into it,
// writes 10 log files and prints their names.

const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// change the current process to the new Logs directory
process.chdir(logsDir);

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(path.join(process.cwd(), fileName), `This is log file number ${i}\n`);
  console.log(fileName);
}

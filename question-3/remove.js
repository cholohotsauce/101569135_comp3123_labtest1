// Question 3 (part 1): Remove log files
// Deletes every file in the Logs directory (printing each name), then removes the directory.

const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
  const files = fs.readdirSync(logsDir);

  files.forEach((file) => {
    console.log(`delete files...${file}`);
    fs.unlinkSync(path.join(logsDir, file));
  });

  fs.rmdirSync(logsDir);
} else {
  console.log('Logs directory does not exist, nothing to remove.');
}

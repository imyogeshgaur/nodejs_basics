const os  = require('os');

console.log(os.arch());

const freeMemory = os.totalmem();

console.log(`${freeMemory/1024/1024/1024}`);
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.version());
console.log(os.tmpdir());
console.log(os.networkInterfaces());
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.cpus());
console.log(os.loadavg());
console.log(os.getPriority());
console.log(os.EOL);
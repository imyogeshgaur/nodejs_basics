const path = require('path');

console.log(path.dirname('D:/nodejs/Thapa/path/index.js'));

console.log(path.extname('index.js'));

console.log(path.normalize('D:/nodejs/Thapa/path/index.js'));

console.log(path.isAbsolute('D:/nodejs/Thapa/path/index.js'));

console.log(path.basename('D:/nodejs/Thapa/path/index.js'));

console.log(path.win32);

console.log(path.delimiter);

console.log(path.parse('D:/nodejs/Thapa/path/index.js'));

const details  = path.parse('D:/nodejs/Thapa/path/index.js');

console.log(details.dir);
var http = require('http');
const fs = require('fs');
var filePath = 'D:\School\Fullstack\labtest1\question-3\logs';



for (var i = 0; i < 11; i++) {
  fs.appendFile(`log${i}.txt`, 'This is a log file!', function (err) {
    if (err) throw err;
    console.log(`log${i} created`);
  });
}

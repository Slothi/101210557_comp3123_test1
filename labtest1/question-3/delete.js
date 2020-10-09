const fs = require('fs');
var filePath = 'D:\School\Fullstack\labtest1\question-3\logs';

for (var i = 0; i < 11; i++) {
  fs.unlink(`log${i}.txt`, function (err) {
    if (err) throw err;
    console.log(`log${i} deleted`);
  });
}

// const readline = require('readline')
//                     .createInterface({
//                         input: process.stdin,
//                         output: process.stdout
//                     });
  
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
//   });

var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('convertTime.js')
});

var lineno = 0;
myInterface.on('line', function (line) {
  lineno++;
  console.log(lineno + ': ' + line);
});

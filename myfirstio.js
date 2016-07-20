var fs = require('fs');

// var content = fs.readFileSync('./text.txt');
var content = fs.readFileSync(process.argv[2]);
content = content.toString();

var array = content.split('\n');
var counter = 0;
for (var i = 0; i < array.length-1; i++) {
  counter +=1;
}
// var counter = content.split('\n').length-1;

// console.log(content);
console.log(counter);

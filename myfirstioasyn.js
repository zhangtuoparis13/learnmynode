// var fs = require('fs');
//
// fs.readFile(process.argv[2],(err,data)=>{
//   if (err) throw err;
//     console.log(data.toString().split('\n').length-1);
// })

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})

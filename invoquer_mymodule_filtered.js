// var mymodule_filtered = require('./mymodule_filtered.js');
// var dir = process.argv[2];
// var filextention = '.' + process.argv[3];
//
// var callback = function (err,list) {
//   if (err) {
//     throw err;
//   }
// }
//
// mymodule_filtered(dir, filextention, callback);

var path = require('path');
var mymodule = require('./mymodule_filtered.js');
var dir = process.argv[2];
var filterExtension = process.argv[3];

var callback = function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    })
}

mymodule(dir, filterExtension, callback);

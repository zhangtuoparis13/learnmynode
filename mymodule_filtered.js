// var fs = require('fs');
// var path = require('path');
//
// var mymodule_filtered = function (directory, extention, callback) {
//   fs.readdir(directory, (err,list)=>{
//     if (err) return callback(err);
//     else {
//       for (var i = 0; i < list.length; i++) {
//         if (path.extname(list[i]) === extention ) console.log(list[i]);
//       }
//     }
//     return callback(null,list);
//   })
// }
//
//   module.exports = mymodule_filtered;

var fs = require('fs');
var path = require('path');

var mymodule_f = function (directory, extension, callback) {
    fs.readdir(directory, function (err, list) {
        if (err) return callback(err);
        else {
            list = list.filter(function (file) {
                if(path.extname(file) === '.' + extension)
                    return true;
            });
            return callback(null, list);
        }
    })
};

module.exports = mymodule_f;

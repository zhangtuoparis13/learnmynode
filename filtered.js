var fs = require('fs');
var path = require('path');

var extention = '.' + process.argv[3];
var dir = process.argv[2];
// fs.readdir(dir,function(err, list){
//   console.log(list);
// });
//
fs.readdir(dir,(err,list)=>{
  if (err) throw err;
  // else if (list.path.extname) {
  //
  // }
  // console.log(list);
  for (var i in list) {
    if (path.extname(list[i]) == extention ) {
      console.log(list[i]);
    }
  }

//   fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function(file) {
//       if (path.extname(file) === ext) {
//           console.log(file)
//       }
//   })
// })

  //
  // for (var i = 0; i < list.length; i++) {
  //   if (path.extname(list[i]) == '.js') console.log(list[i]);
  // }
})

// 要过滤掉对象继承的属性，用hasOwnProperty()来实现：
//
// var o = {
//     name: 'Jack',
//     age: 20,
//     city: 'Beijing'
// };
// for (var key in o) {
//     if (o.hasOwnProperty(key)) {
//         alert(key); // 'name', 'age', 'city'
//     }
// }
// 由于Array也是对象，而它的每个元素的索引被视为对象的属性，因此，for ... in循环可以直接循环出Array的索引：
//
// var a = ['A', 'B', 'C'];
// for (var i in a) {
//     alert(i); // '0', '1', '2'
//     alert(a[i]); // 'A', 'B', 'C'
// }
// 请注意，for ... in对Array的循环得到的是String而不是Number。

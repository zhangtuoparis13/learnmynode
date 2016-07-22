/**
 * Created by TBtuo on 22/07/16.
 */

/*var http = require('http');
var url = process.argv[2];
http.get(url, function (response) {
    response.setEncoding("utf8");
    response.on('data', function (data) {
        console.log(data);
    })
    response.on('error', function (err) {
        console.log(err);
    })
}).on('error',console.error)*/

var http = require('http');

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error)
});




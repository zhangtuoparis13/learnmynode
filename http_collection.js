/**
 * Created by TBtuo on 22/07/16.
 */

/*var http = require('http');
var url = process.argv[2];

var fullString = ''; // 定义一个空字符串用来接收从http网站上接收的数据

http.get(url,function callback(response) {

    response.on('data', function (err,data) {
        if (err)
            return console.error(err);
        fullString += data.toString();
    })

    response.on('end',function () {
        console.log(fullString.length);
        console.log(fullString);
    })
});*/

/*
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})*/

/*var http = require('http');
var fullString = '';
http.get(process.argv[2], function callback(response) {

    response.on('data', function(data) {
        fullString += data.toString();
    })
    response.on('end', function() {
        console.log(fullString.length);
        console.log(fullString);
    })
})*/


var http = require('http');
var bl = require('bl');

/*http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err)
            return console.log(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})*/

/*http.get(process.argv[2],response =>{
    // "use strict";
    response.pipe(bl((err,data)=>{
        if (err)
            return console.log(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})*/

const concatstream = require('concat-stream');

http.get(process.argv[2], response=>{
    "use strict";
    response.pipe(concatstream(data=>{
        data = data.toString();
        console.log(data.length);
        console.log(data)
    }))
});

















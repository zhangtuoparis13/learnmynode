/**
 * Created by TBtuo on 23/07/16.
 */

// solution 1
/*const http = require('http')
const fs = require('fs')
const url = require('url')
const queryString = require('querystring')

var server = http.createServer(function (request, response) {
    var obj = url.parse(request.url)
    var param = queryString.parse((obj.query));
    response.writeHead(200,{"Content-Type": "application/json"});
    if ("/api/parsetime" ===obj.pathname){
        let date = new Date(param.iso);
        let retObj ={
            hour : date.getHours(),
            minute : date.getMinutes(),
            second : date.getSeconds()
        };
        response.end(JSON.stringify(retObj));
    }
    if ('/api/unixtime' === obj.pathname){
        let date =new Date(param.iso);
        let retObj ={unixtime: date.getTime()}
        response.end(JSON.stringify(retObj))
    }
})

server.listen(process.argv[2])*/

//solution 2
/*
var http = require('http');
var url = require('url');
var port = process.argv[2];
httpServer = http.createServer(function (request, response) {
    if (request.method=='GET') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        var parsedReq = url.parse(request.url, true);
        var date = new Date(parsedReq.query['iso']);
        if (parsedReq.pathname == "/api/parsetime") {
            date = '{"hour":'+ date.getHours() +',"minute":'+ date.getMinutes() +',"second":'+ date.getSeconds() +'}';
        } else if (parsedReq.pathname == "/api/unixtime") {
            //                                      vvvvvvvvvvvv necessary to get milliseconds.
            date = '{"unixtime":'+ Date.parse(date.toISOString()) +'}';
        }
        response.end(date);
    }
})
httpServer.listen(port);
*/

//solution 3

const http =require('http')
const url =require('url')

function parsetime(time) {
    return {
        hour: time.getHours(),
        mimute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime(time) {
    return {unixtime : time.getTime()}
}

var server = http.createServer(function (request, response) {
    var parseUrl = url.parse(request.url,true)
    var time = new Date(parseUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(request.url))
        result =parsetime(time)
    else if (/^\/api\/unixtime/.test(request.url))
        result = unixtime(time)

    if (result){
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify(result))
    }else {
        response.writeHead(404)
        response.end()
    }
})
server.listen(Number(process.argv[2]))
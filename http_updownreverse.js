/**
 * Created by TBtuo on 23/07/16.
 */

/*const http = require('http')
const fs =require('fs')
let through2map = require('through2-map')
var server = http.createServer(function (request, response) {
    if (request.method != 'POST')
        return response.end('Please send me a Post Method\n')
    request.pipe(through2map(function (chunkdata) {
        return chunkdata.toString().toUpperCase()
    })).pipe(response)
})
server.listen(Number(process.argv[2]))*/

/*
var map = require('through2-map')
var http = require('http')
http.createServer(function(inStream, outStream) {
    if(inStream.method == 'POST') {
        inStream.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(outStream)
    }
}).listen(process.argv[2]);*/

var http =require('http')

http.createServer((function (request, response) {
    var postData = '';
    request.addListener("data",function (postDataChunk) {
        if (request.method === 'POST')
        {
            postData+=postDataChunk;
        }
    })
    request.addListener("end",function () {
        if(request.method === 'POST')
        {
            response.end(postData.toUpperCase(), 'utf8');
        }
    })
})).listen(process.argv[2])

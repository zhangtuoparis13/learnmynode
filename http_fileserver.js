/**
 * Created by TBtuo on 23/07/16.
 */

const http = require('http');
const fs = require('fs');

let port_number = process.argv[2]
let file_path = process.argv[3]

/*let server = http.createServer(function (request, response) {
    // response.writeHead(200,{'Content-Type': 'text/html'})
    //将http响应200 写入response, 同时设置Content-Type: 「text/html」」
    fs.createReadStream(file_path).pipe(response)
    // response.end('<h1> Response Fin ! </h1>')
})*/
let server = http.createServer((request,response)=>{
    "use strict";
    let src = fs.createReadStream(process.argv[3])
    src.pipe(response)
})

server.listen(Number(port_number));

console.log('Server is running..')
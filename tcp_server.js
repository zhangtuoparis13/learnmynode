/**
 * Created by TBtuo on 23/07/16.
 */

const net = require('net');

//方法一 创建一个填充函数来调整时间格式
/*function zeroFill(i) {
    if (i<10)
        return '0'+i
    else return i
}
function now() {
    let date = new Date()
    return date.getFullYear() + '-' +
        zeroFill(date.getMonth()+1) + '-' +
        zeroFill(date.getDate())+ ' ' +
        zeroFill(date.getHours()) + ':' +
        zeroFill(date.getMinutes());
}

let server = net.createServer(function (socket) {
    socket.write(now());
    socket.end('\n');
})*/

const strftime = require('strftime');
//方法二  直接使用 strftime这个包 在newDate里面调整格式
let server = net.createServer(socket=>{
    // "use strict";
    socket.write(strftime('%F %H:%M', new Date()));
    socket.end('\n');
});
server.listen(Number(process.argv[2]));



/**
 * Created by TBtuo on 22/07/16.
 */

/*
const http = require('http');
const bl = require('bl');
var result =[];
var count = 0;
// var url_1 = process.argv[2];
// var url_2 = process.argv[3];
// var url_3 = process.argv[4];
function printResult() {
    for(let i = 0;i<3;i++)
        console.log(result[i])
}

function httpGet(index) {
    http.get(process.argv[2+index],function (response) {
        response.pipe(bl(function (err,data) {
            if (err)
                return console.log(err)
            result[index] = data.toString();
            count++;

            if (count === 3) printResult();
        }))
    })
}

for (let i =0; i<3; i++)
    httpGet(i)*/

const http = require('http');
const concatstream = require('concat-stream');
let result = [];
let count = 0;

let httpGet;

function printResult() {
    for (let i = 0; i < 3 ; i++)
        console.log(result[i])
}
/*let printResult=()=> {
    for (let i = 0; i < 3 ; i++)
        console.log(result[i])
}*/

httpGet = (index)=> {
    http.get(process.argv[2 + index], response=> {
        "use strict";
        response.pipe(concatstream(content=> {
            result[index] = content.toString();
            count++;
            if (count = 3)
                printResult()
        }))
    })
};

for (let i = 0; i < 3; i++) httpGet(i)
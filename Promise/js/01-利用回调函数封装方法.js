let fs  = require('fs');

function getFile(path,callsucc,callerr){
    fs.readFile(path,'utf-8',(err,data)=>{
        if(err){
            callerr(err);
        }
        else {
            callsucc(data);
        }
    })
}
// 使用回调函数主要是拿到需要返回的值

// 1---需求:先读取文件1,再读取文件2,最后读取文件3
// 2---如果想要按顺序读取文件,必须嵌套回调
// 回调地狱
getFile('../1.txt',function (data) {
    console.log(data);
    getFile('../2.txt',function (data) {
        console.log(data);
        getFile('../3.txt',function (data) {
            console.log(data);
        })
    })
});
/*
getFile('../1.txt',
    (data)=>{console.log(data)}
    )

getFile('../2.txt',
    (data)=>{console.log(data)}
    )
getFile('../3.txt',
    (data)=>{console.log(data)}
    )*/

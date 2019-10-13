let fs =require('fs');
// 1---Promise是一个构造函数,既然是一个构造函数,可以new得到一个实例
// 2---在Promise上有两个函数,分别叫做resolve(成功之后的回调函数)和reject(失败之后的回调函数)
// 3---在promise构造函数的Prototype属性上有一个.then()方法,new得到的实例可以使用.then()方法
// 4---Promise表示一个异步操作;每当我们new一个Promise的实例,这个实例就表示一个具体的异步操作
// 5---由于Promise的实例是一个异步操作,所以内部拿到操作的结果后,无法使用return把操作的结果返回给调用者,
//     只能使用回调函数的形式把成功或者失败的结果返回给调用者
// 6---我们可以在new出来的promise实例上调用.then方法,预先为这个promise异步操作制定成功(resolve)和失败(reject)方法

// Promise是为解决回调地狱而设计的

/*
let promise = new Promise(function () {
    //这个function内部写的就是具体的异步操作!!!
    //fs.readFile()  --> 说明promise执行的是读文件的异步操作
});
*/

function getFile(path) {
    let promise = new Promise(function (resolve, reject) {
        fs.readFile(path,'utf-8',(err,data)=>{
            // if(err) throw err
            // console.log(data)
            if(err){reject(err)}
            resolve(data);
        })
    })
    return promise;
}

let p = getFile('../1.txt');
p.then(function (data) {
    console.log(data);
},function (err) {
    console.log(err.message);
})





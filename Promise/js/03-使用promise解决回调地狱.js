let fs = require('fs');

function getFile(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path,'utf-8',(err,data)=>{
            if(err){reject(err)}
            resolve(data);
        })
    })
}
// 注意: 成功的回调函数必须传,失败的回调函数可以不传

// 注意: 如果前面的promise执行失败我们不想让后续的promise操作被终止, 可以为每个promise制定失败的回调

// !!!需求一 前面的promise执行失败了,但不要影响后面的执行
// 我们可以单独为每个promise通过.then制定一下失败的回调
/*
getFile('../11.txt')
.then(function (data) {
    console.log(data);
    return getFile('../2.txt')
},function(err){
    console.log(err.message)
        //返回一个新的promise
    return getFile('../2.txt')
    })

.then(function (data) {
    console.log(data);
    return getFile('../3.txt')
})

.then((function (data) {
    console.log(data);
}))
*/


// !!!需求二 (正相反)前面的执行失败了,后面的不要执行
getFile('../11.txt')
    .then(function (data) {
        console.log(data);
        return getFile('../2.txt')
    })

    .then(function (data) {
        console.log(data);
        return getFile('../3.txt')
    })

    .then((function (data) {
        console.log(data);
    }))

    .catch(function (err) {
        console.log(err.message);
    })

// catch的作用:如果前面有任何的promise执行失败,则立即终止所promise的执行,并马上进入catch去处理promise中抛出的失败

const fs = require('fs');
const path = require('path');

// function getFileName(fileName,callback){
//     const fullFileName=path.resolve(__dirname,'files',fileName);

//     fs.readFile(fullFileName,'utf-8',(err,data)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log(data.toString());
//             callback(JSON.parse(data.toString()));
//         }
//     })
// }

// getFileName('a.json',(data)=>{
//    let next = data.next;
//    console.log(data.message);
//    getFileName(next,bData=>{
//     let bnext = bData.next;
//     console.log(bData.message);
//     getFileName(bnext,cData=>{
//         console.log(cData.message);
//        })
//    })
// })

// promise

function getFileName(fileName,callback){
    const promise=new Promise((resolve,reject)=>{
        const fullFileName=path.resolve(__dirname,'files',fileName);

        fs.readFile(fullFileName,'utf-8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                console.log(data.toString());
                resolve(JSON.parse(data.toString()));
            }
        })
    })
    return promise;
}

getFileName('a.json').then(aData=>{
    console.log(aData.message);
    return getFileName(aData.next);
}).then(bData=>{
    console.log(bData.message);
    return getFileName(bData.next);
}).then(cData=>{
    console.log(cData.message);
})
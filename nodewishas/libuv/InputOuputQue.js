const fs = require("fs")


fs.readFile(__filename,()=>{console.log("Read this file")})

process.nextTick(()=>console.log("This is process.nextTick 1"))
Promise.resolve().then(()=>console.log("This Promise.resolve 1"))
setTimeout(()=>{console.log("This is setTimeout 2")},0)
setImmediate(()=>console.log("This is setImmediate 1"))
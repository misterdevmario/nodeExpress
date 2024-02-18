const fs = require("node:fs")

fs.readFile('../Built-in-Modules/file.txt', 'utf-8', (err, data) => {
   console.log(data)
})

console.log("Last")
const fs = require ("node:fs")

console.log("first")
//Read files synchronously
const fileContent = fs.readFileSync("./file.txt", "utf-8");

console.log(fileContent)
console.log("Second")

//Read files asynchronously
fs.readFile("./file.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log("Third")

//Write synchronously

fs.writeFileSync("./Greet.txt", "Hello Mario");

//Write asynchronously

fs.writeFile("./Greet.txt", " Hello World", {flag: "a"}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File written successfully");
    }
}); 
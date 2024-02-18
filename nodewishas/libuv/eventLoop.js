// event loop is a c program part of libuv

//Microtasks nextTick

// console.log("first")
// process.nextTick(() => {
//     console.log("nextTick - 1")
// })
// console.log("second")

//Microtasks Promises

// Promise.resolve().then(function () {
//     console.log("Promise - 1")
// })

// process.nextTick(() => {
//     console.log("nextTick - 1")
// })

//Combination

Promise.resolve().then(function () {
    console.log("Promise - 1")
})
Promise.resolve().then(function () {
    console.log("Promise - 2")
    process.nextTick(() => {
        console.log("nextTick - 1 inside Promise - 2")
    })
})
Promise.resolve().then(function () {
    console.log("Promise - 3")
})

process.nextTick(() => {
    console.log("nextTick - 1")
})
process.nextTick(() => {
    console.log("nextTick - 2")
    process.nextTick(() => {
        console.log("nextTick - inside nextTick - 2")
    })
})

process.nextTick(() => {
    console.log("nextTick - 3")
})





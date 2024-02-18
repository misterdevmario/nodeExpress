const add  =  (a, b) => a + b

const minus = (a, b) => a - b

//Exporting patterns

module.exports = { add, minus }

module.exports.add = add
module.exports.minus = minus

module.exports.sum = (a, b) => a + b
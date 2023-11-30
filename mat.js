// def exp
const sum = (a, b) => a+b;
//    1
//ESM export sum from sum
//module.exports = sum
//console.log('module.exports :>> ', module.exports);
const mult = (a, b) => a*b;

//   2.a -----name export
//module.exports = { sum,  mult };



// 2b
//ESM export const sum = (a, b) => a+b
module.exports.sum = (a, b) => a + b;
module.exports.mult = (a, b) => a*b;

//def imp
//   1
//ESM import sum from "./mat"
//const sum = require("./mat");
//console.log(sum(1, 4));



//    2.1 ---name import
//const Math = require("./mat.js");
//console.log(Math.sum(1, 10));


//    2.2 ESM import{ sum, mult} from "./mat.js"
//const { sum, mult } = require("./mat.js");
//console.log('mult(5, 10) :>> ', mult(5, 10));
//const os = require('os');
//console.log(os.cpus());
//console.log(os.homedir());
//console.log(os.platform());
//const os = require('os');
//const fs = require('fs');

//try {
//const file = fs.readFileSync('./mat.js', {encoding:'utf-8'});
//console.log(file);
//} catch (err){
 //   console.log('err :>> ', err);
//}

//CONTRACT 'ERROR FIRST'
//fs.readFile('./mat.js', {encoding:'utf-8'},(err, filedate)=>{
//if(err){
  //  console.log('err :>> ', err);
//} else {
  //  console.log('filedATE :>> ', filedate);
//}
//});
//////////////////////////
//console.log('filename :>> ', filename);
//console.log('dirname :>> ', dirname);
let fs = require("fs");
let path = require("path");
// help function implemented
function helpfn(dirpath){
 console.log(`
  List of all the commands - 
  node main.js tree "directory path"
  node main.js organize "directory path"
  node main.js help "directory path"
  `);
}

module.exports={
 helpkey:helpfn
}
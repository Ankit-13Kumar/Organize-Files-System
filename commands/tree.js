let fs = require("fs");
let path = require("path");

function treefn(dirpath){
 let destpath;
 if(dirpath==undefined)
 {
    treehelper(process.cwd() , "");
  return ;
 }
 else{
    let doesexist = fs.existsSync(dirpath);
    if(doesexist)
    {
       treehelper(dirpath , "");
    }
    else
    {
           console.log("Enter the correct path");
           return ;
    }
 }
}

function treehelper(dirpath , indent)
{
 // if file present or a folder
 let isFile = fs.lstatSync(dirpath).isFile();
 if(isFile==true)
 {
        let filename = path.basename(dirpath);
        console.log(indent + "____"  + filename);
 }
 else{
    let dirname  = path.basename(dirpath);
    console.log(indent + "-----" + dirname);
    let childrens = fs.readdirSync(dirpath);
    for(let i = 0 ; i< childrens.length ; i++)
    {
       let cpath = path.join(dirpath , childrens[i]);
       treehelper(cpath, indent + "\t");
    }
 }
}
module.exports={
 treekey:treefn
}
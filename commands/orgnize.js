
let fs = require("fs");
let path = require("path");

let types= {
   media: ["mp4" , "mkv"] , 
   archives: ['zip' , '7z' , 'rar' , 'tar' , 'gz' , 'ar' , 'iso' , "xz"] , 
   documents: ['docx' , 'doc' , 'pdf' , 'xlsx' , 'xls' , 'odt' , 'ods' , 'odp' , 'odg' , 'odf' , 'txt ' , 'ps' , 'tex'] , 
   app: ['exe' , 'dmg' ,  'pkg' , "deb"] 
}


function organizefn(dirpath){
 // 1. input -> directory path 
 let destpath;
 if(dirpath==undefined)
 {
    destpath = process.cwd();
  //console.log("Kindly enter the path");
  return ;
 }
 else{
    let doesexist = fs.existsSync(dirpath);
    if(doesexist)
    {
          // 2. create a directory of the name organize files if the directory path does not exist
         destpath =  path.join(dirpath , "organized_files");
         if(fs.existsSync(destpath)==false)
         {
         fs.mkdirSync(destpath);
         }
    }
    else
    {
           console.log("Enter the correct path");
           return ;
    }
 }
 organizehelper(dirpath , destpath);

 
 // 4. copy / cut files to that organized directory inside of any of category folder
}

function organizehelper(src , dest)
{
   // 3. identify categories of all the files present in that input directory->
  let childname =  fs.readdirSync(src);
 // console.log(childname);
 for(let i = 0 ; i< childname.length ; i++)
 {
   let childpath =  path.join(src , childname[i]);
   let isFile  = fs.lstatSync(childpath).isFile();  // check whether it is a file or not 
   if(isFile)
   {
     // console.log(childname[i]);     
      let category = getcategory(childname[i]);   
      console.log(childname[i] , "belongs to -->" , category);
      sendfiles(childpath,dest, category);

   }
 }
  
}

function getcategory(name)
{
   let ext = path.extname(name);
  // console.log(ext);
  ext = ext.slice(1);
  for(let type in types )
  {
     let ctypearray = types[type];
     for(let i = 0 ; i< ctypearray.length ; i++)
     {
        if(ext== ctypearray[i])
        {
           return type;
        }
     }
  }
  return "others";
}

function sendfiles(srcfile , dest , category)
{
   let categorypath = path.join(dest , category);
   if(fs.existsSync(categorypath)==false)
   {
      fs.mkdirSync(categorypath);
   }
   let filename  = path.basename(srcfile);
   let destfilepath = path.join(categorypath , filename);
   fs.copyFileSync(srcfile , destfilepath);
}
module.exports={
 organizekey:organizefn
}
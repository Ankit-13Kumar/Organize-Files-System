#!/usr/bin/env node
let inputArr = process.argv.slice(2); // as the first two arguments are node and the name of the file
let helpobj = require("./commands/help");
let treeobj = require("./commands/tree");
let organizeobj = require("./commands/orgnize");
//console.log(inputArr);
let fs = require("fs");
let path = require("path");
let command  = inputArr[0];

// Very important To run type in terminal:-
// PS C:\Users\akumar2490\Downloads\File_System_Organizer-main> node main.js organize "C:\Users\akumar2490\Downloads\File_System_Organizer-main\src"


switch(command)
{
   case "tree" :
      treeobj.treekey(inputArr[1]);  // 0th index has the name of the command and the 1st index has the directory path
   break;
   case "organize" :
    organizeobj.organizekey(inputArr[1]);
   break;
   case "help" :
    helpobj.helpkey(inputArr[1]);
   break;
   default :
   console.log("Input the correct command");
   break;
}





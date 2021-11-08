#!/usr/bin/env node

const fs = require("fs-extra")
const path = require("path")
var args = process.argv.slice(2)
var project_name = args[0]
if(project_name){
    console.log("Initialing project "+project_name)  
    fs.copy(__dirname+"/template",path.join(process.cwd(),project_name))
    .then(() => console.log('Finished!'))
    .catch(err => console.error(err))
}else{
    console.log("Please specify a name of the project")
    console.log("Usage: em-init <name or path>")
}

//to run from terminal, simply type node app.js
const scoreFns = require('./scoreFns')
//need to create file that has data and is labeled fs
const fs = require('fs');



fs.readFile('class1.txt', (err, data)=>{
    if(err){
        console.log(err)
    }
    else {
        console.log(data.toString().split('\n'))
    }
})
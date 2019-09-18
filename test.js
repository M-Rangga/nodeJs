const fs = require('fs')

console.log('start reding a file. . . ')

fs.readFile('text.txt', 'utf-8', (err,content)=>{
    if(err) {
        console.log('error heppened during reading the file')
        return console.log(err)
    }

    // Lakukan sesuatu disini kalau berhasil

    console.log("Berhasil: " + content);
})

console.log('end of the file')
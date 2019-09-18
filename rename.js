const fs = require('fs')

console.log('start reding a file. . . ')

fs.readFile('text.txt', 'utf-8', (err,content)=>{
    if(err) {
        console.log('error heppened during reading the file')
        return console.log(err)
    }

    fs.rename('text.txt', 'Terserah.txt', (err)=>{
        if(err) console.log('gagal rename!'+err);
      
        console.log("Berhasil");
        
    })

})

console.log('end of the file')
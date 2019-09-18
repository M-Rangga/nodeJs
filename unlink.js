const fs = require('fs');

fs.readFile('terserah.txt', async (err,  data)=>{
  if(err) console.log("Data tidak di temukan!");

  await console.log("Data di temukan");

  fs.unlink('terserah.txt', async (err)=> {

    if(err) console.log("Gagal Hapus Data!");

    console.log('Hapus data berhasil!');
  })
  
})
const a =  'a';
const promiseku = new Promise((resolve, rejects) => {
    if(a === 'a'){
        resolve("Berhasil");
    }else{
        rejects("Gagal");
    }
});

promiseku.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
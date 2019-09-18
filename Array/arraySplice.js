let bulan = ['Januari', 'Februari', 'Maret', 'Juni'];
bulan.splice(3,0,'April');
console.log(bulan);

bulan.splice(4,1,'Mei');
console.log(bulan);

bulan.splice(1);
console.log(bulan);

let myFish = ['Angel', 'Clown', 'Trumpet', 'Strugeon'];
let remove = myFish.splice(0,2, 'Parot', 'Anemo', 'Blue');
console.log(myFish);
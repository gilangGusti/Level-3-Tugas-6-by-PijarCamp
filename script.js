// Tugas 6 No. 1
// Perulangan atau juga sering dikenal dengan looping merupakan pernyataan atau instruksi yang diberikan kepada komputer agar ia mau melakukan sesuatu entah itu memproses data, menampilkan data, atau yang lainnya secara berulang.

for (let i = 0; i < 4; i++) {
  console.log('angka' + i);
}
console.log("-----------")
let i = 0;
while (i < 5) {
  console.log('angka' + i)
  i++
}
console.log("-----------")
let u = 20;
do {
  console.log('angka'+u);
  i++
}while (u<10)
console.log("-----------")
const hp = ['Xiaomi','Samsung','Iphone'];
for (let i = 0; i<hp.length; i++){
  console.log(hp[i]);
}
console.log("---------")
for (const m of hp){
  console.log(m);
}
console.log("---------")
const siswa = {
  nama : 'Gilang',
  umur : 18,
  email : 'kggilang@gmail.com'
}
console.log("---------")
for (m in siswa) {
  console.log(m);
}
console.log("---------")

// No.2 Tugas 6
for (let i = 0; i < 4 ; i++) {
  console.log(i);
}

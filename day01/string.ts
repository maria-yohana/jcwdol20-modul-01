//String : data yang terdiri dari huruf atau karakter text

let namaToko: string = "RUNNER SPORT"; //double quotes
let alamatToko: string = `Jalan Pemuda nomor 1`; //template literal atau backthick
let kodeToko: string = `55281`; 

//Menggabungkan data string
//cara 1: menggunakan operator penjumlahan
let tokoKu: string = namaToko + " " + alamatToko;
console.log(tokoKu);

let tokoAKu: string = namaToko + " " + alamatToko + " " + kodeToko;
console.log(tokoAKu);

//cara 2: backthick (?)
tokoKu = `${namaToko} ${alamatToko}`;
console.log(tokoKu);

tokoAKu = `${namaToko} ${alamatToko} ${kodeToko}`;
console.log(tokoAKu);

//typeof: fungsi JS yang bertugas untk mengetahui TIPE DATA suatu variable atau data itu
console.log(typeof tokoKu);
console.log(typeof 10); 

//FUNGSI BAWAAN TYPE DATA STRING
let greeting: string = "Hello, Purwadhika Student" ;

//length() -- count character pada data string
console.log(greeting.length);

//toLowerCase() -- merubah semua huruf menjadi huruf kecil
console.log(greeting.toLowerCase()); 

//toUpperCase() -- merubah semua huruf menjadi huruf besar
console.log(greeting.toUpperCase());

// includes() -- memastikan suatu kata di dalam string
console.log(greeting.includes("Student"));  

//split() -- merubah data menjadi string menjadi data array
// ada bedanya kalau di dalam quote diberikan spasi atau tidak
// jika tidak ada spasi dalam "" maka data dipisah per-karakter
console.log(greeting.split(" "));

//replace -> mengganti kata tertentu 
console.log(greeting.replace("Student", "Murid"));
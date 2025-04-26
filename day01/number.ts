//Number: Tipe data dalam bentuk angka

let jarak: number = 15000 // Nilai INT
let berat: number = 90.25; // Nilai Float/decimal

//Arithmetic : +, -, *, ?, % (operator)
let angkaA: number = 15;
let angkaB: number = 13;

let resultTest: number;
resultTest = angkaA + angkaB;
console.log(resultTest); 

//Increment
let count: number = 0;
//postfix -- di-increment dulu baru muncul di terminal
count++;    // Postfix count = count +1;
count++;    // Postfix 
++count;    // Prefix
++count;    // Prefix
//console.log(count); 3
//console.log(count++); 3
//
console.log(count); 
console.log(++count);
console.log(++count, ++count,++count);
console.log(count);
console.log(count);
console.log(count++);
console.log(count++);
console.log(count);
console.log(count *2 );
console.log(count++); 
console.log(count + ++count);
console.log(count);
console.log(count++ + count++);
console.log(count); 

//Decrement
count--;
count--;
--count;
console.log(count);

//example
let abc: number = 8;
console.log(abc--);
console.log(--abc);
console.log(abc + abc--);
console.log(abc-- + --abc);
console.log(abc);

//Math Object -- kumpulan fungsi JS untuk perhitungan
let resultcc: number = 1
const pi: number = Math.PI;
console.log(resultcc + pi); //** example */
console.log(pi);

//Pembulatan
console.log(Math.round(25.4));
console.log(Math.round(26.5));
console.log(Math.ceil(25.1));
console.log(Math.floor(25.9));

//MIN and MAX
console.log(Math.max(12, 5,9, 65));
console.log(Math.min(0, -34, -13, -100, 54))

//Random value
console.log(Math.random());

// Parsing data
// <engubahnya ke format lain yang sesuai. example: string jadi number di bawah ini
let angkaNumber: string = "123.456"
console.log(parseInt(angkaNumber));
console.log(parseFloat(angkaNumber));

let harga: number = 525000;
console.log(harga.toString()); 
console.log(harga.toLocaleString());
//nulis rupiahnya dan USDnya tidak manual 
console.log(harga.toLocaleString('id-ID', { 
    style: 'currency', 
    currency: "IDR", 
    minimumFractionDigits: 0,
}));
console.log(harga.toLocaleString('us-US', { style: 'currency', currency: 'USD' })); 

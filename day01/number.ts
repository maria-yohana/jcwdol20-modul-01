//Number: Tipe Data dalam Bentuk Angka

let jarak: number = 15000 // Nilai INT
let berat: number = 90.25; // Nilai Float/decimal

//Arithmetic : +, -, *, /, 
let angkaA: number = 15;
let angkaB: number = 13;

let result: number;
result = angkaA + angkaB;
console.log(result);

//Increment
let count: number = 0;
count++;    // Postfix count = count +1;
count++;    // Postfix 
++count;    // Prefix
++count;    // Prefix
console.log(count);
console.log(++count);
console.log(count);

//Decrement
count--;
count--;
--count;
console.log(count);

//Math Object
const pi: number = Math.PI;
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
let angka: string = "123.456"
console.log(parseInt(angka));
console.log(parseFloat(angka));

let price: number = 525000;
console.log(price.toString()); 
console.log(price.toLocaleString("id-ID", {

    
}));

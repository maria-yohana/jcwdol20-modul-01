//Boolean : tipe data yang hanya memiliki dua opsi nilai true or false
let benar: boolean = true;
let salah: boolean = false;

//comparison operator: >, <, >=, <=, ==, ===, != -> comparison operator
//comparison operator -> operasi perbandingan
let valueA: string | number = 12;
let valueB: string | number = 15;

console.log(valueA > valueB); 
console.log(valueA < valueB);
console.log(valueA >= 8);
console.log(valueB <= 15)
console.log(valueA != valueB);
console.log(valueA == "12");

//comparison operator == 2 , fokus nilai - bukan tipe data -- angka tipe number /string
//console.log(valueA === "12");

//comparison operator === perbandingan value dan type datanya juga, makanya false

//Logical operator: AND &&, OR || NOT !
//AND logikan yang menghasilkan nilai true jika semua nilai boolean yang di simpulkan nilainya true
console.log(true && true);
console.log(valueA === 12 && valueB < 20); 
console.log(true && false);
console.log(false && true);
console.log(false && false);

//OR : logika yang akan menghasilkan nilai TRUE jika salah satu nilai boolean yang di simpulakn nilainya rue
console.log( true || true);
console.log(true || false);
console.log(false  || true);
console.log(false || false);

//NOT: membalikkan nilai boolean
console.log(!false);
//console.log(!valueA === valueB);
//tiap tipe data di JS ada boolean bawaan

//Nilai boolean berdasarkan data
//TRUTHLY
console.log(Boolean("ABC"));
console.log(Boolean(" "));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(true));
console.log(Boolean([]));
console.log(Boolean({}));

//FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));
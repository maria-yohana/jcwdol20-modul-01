//Boolean : tipe data yang hanya memiliki dua opsi nilai true or false
//Cara cara Penulisan:
// 1. PENULISAN SECARA LANGSUNG
let benar: boolean = true;
let salah: boolean = false;

/**
 * selain menuliskan secara langsung true/salah pada boolean,
 kita juga bisa mendapatkannya dari comparison operator
 */
//2. COMPARISON OPERATOR: >, <, >=, <=, ==, ===, !=  
//comparison operator -> operasi perbandingan
//caranya kita bisa mengisi data dengan number atau string 
let valueA: string | number = 12;
let valueB: string | number = 15;
let valueC: string | number = "genap"

console.log(valueA > valueB);
console.log(valueA < valueB);
console.log(valueA >= 8);
console.log(valueB <= 15);
console.log(valueA != valueB);
console.log(valueA == 12);
console.log(valueA == valueB);

//Comparison operator ==  fokus nilai bukan tipe data. Angka tipe number /string
//This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.
//console.log(valueA == "12"); true

//triple equal
//comparison operator === perbandingan value dan type datanya juga, makanya false. 
//console.log(valueA === "12"); false
console.log(valueA === valueB);

//***/
console.log(valueA + " adalah angka " + valueC); 

//3. LOGICAL OPERATOR: && || ! (AND OR NOT)
//AND: logika yang akan menghasilkan nilai true jika semua nilai boolean true
console.log(true && true);
//example of logika operator && below:
console.log(valueA === 12 && valueB < 20); 
console.log(true && false);
console.log(false && true);
console.log(false && false);

//OR: logika yang akan menghasilkan nilai TRUE jika salah satu nilai boolean true
console.log(true || true);
console.log(true || false);
console.log(false  || true);
console.log(false || false);

//NOT: negasi, membalikkan nilai boolean
console.log(!false);
console.log(valueA === valueB);
console.log(!(valueA === valueB));

///tiap-tiap data di JS ada boolean bawaan. Jadi nilai true and false boolean bisa didapat dari tipe data
//4. NILAI BOOLEAN berdasarkan data dengan memanggil fungsi boolean
//TRUTHLY
console.log(Boolean("ABC"));
//spasi juga nilai
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
// Variable : Penampung Data
// Variable is the fruit container

/**
 * Susunan penulisan variable --> define keywordVariable(kontainer) namaVariable(labelA) = data(jeruk);
 * keywordVariable  :   var, let, const
 * namaVariable     :   - harus diawali dengan huruf atau diawali dengan symbol "_" / symbol "$"
 *                      - jika dua kata maka camelCase atau snake_case
 * dataVariable     :   nilai yang ingin kita simpan berdasarkan TIPE DATA yang tersedia di antaranya: 
 *                      string, number, boolean, null, undefined, array dan object
 */


// Variable Declaration
// Ada penampung data, tapi datanya kosong
var message;

// Variable initialization
// Data diberikan nilai
var nama = "Maria" ;

//to output -> control K (then) Q -> fungsi JS yang bertugas menampilkan data dari variable/function/data secara langsung 
console.log(nama);

//Keyword var: redeclare, reassign
//Reassign works best for overwriting a data
var city = "Malang";
console.log(city);
var city = "Bandung"; //redeclare ; why? cause it's stating var again
console.log(city);
city = "Surabaya"; //reassign ; it's assigning the data to the data type
console.log(city);

//Keyword let: non-redeclare, reassign
let age= 40;
console.log(age);
//when we add new line with let, Visual Code will give red warning, let is not defined
//because let age has been defined.
///let age= 20; SyntaxError: Identifier 'age' has already been declared (21:4)
///console.log(age); 

//correct way  to use reassign
age = 30;
console.log(age);

//Keyword const: non redeclare, non reassign
//menyimpan data yang lebih permanen, maka tidak lagi di0-redeclare/reassign
const PI = 3.14;
console.log(PI);

//const PI = 22; // non redeclare
//PI = 2; // non reassign

//***//

//Data type: kumpulan model tipe data pada Javascript
//Primitive -> tipe data karakter(?)
let region = "East Java"; //string
let weight = 30.5; //number
let isActive = true; //boolean
const NoData= "null" //null -> data kosong
const undefinedData = undefined; //undefined -> data tidak di definisikan yang jelas

//Non Primitive
const product = ["Apel", "Jeruk", "Mangga"]; //Array
const job = {
    position: "Coder",
    salaryRate: 4000000,
}; // Object
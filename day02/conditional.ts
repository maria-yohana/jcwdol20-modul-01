//Conditional statement : code yang memberikan pilihan eksekusi program sesuai kondisi yang diberikan

/**
if : untuk satu kondisi
if...else : untuk dua kondisi
if...else if...else : untuk 3 kondisi atau lebih
switch...case: pengkondisian dalam bentuk validasi kecocokan nilai
 */

//contoh data
let nama: string = "Edo";
let usia: number = 20;
let email: string = "edo@tensei.com";

/** IF STATEMENT
Aturan penulisan :
if (condition){
        taskCode
}

note:
    condition: sesuai kondisi yang diinginkan berdasarkan nilai boolean yang didapat dari COMPARISON, 
LOGICAL, THRUTHY, FALSY
    taskCode : kumpulan baris program yang ingin dijalanakan.
**/

//example case: memvalidasi batas usia terentu:
let message = "";
if (usia > 17) {
    message = `Verifikasi usia ${email} berhasil`
}
console.log(message);

/** IF...ELSE STATEMENT
Aturan penulisan :
if (condition){
        taskCode
} else {
        taskCode
}
*/

//example case: 
usia = 5
if (usia > 17) {
    message = `Verifikasi usia ${email} berhasil`;
} else {
    message = `Verifikasi usia ${email} GAGAL`;
}
console.log(message);

/** IF...ELSE...IF...ELSE STATEMENT
Aturan penulisan :
if(condition){
        taskCode
}else if(condition){
        taskCode
}else {
        taskCode
}
*/

//example case: LEARN!
let examGrade: number = 75;
let result: string = ""; 
if (examGrade >= 90) { //variable penampung output
    result = "Grade A" 
} else if (examGrade < 90 && examGrade >= 80) {
    result = "Grade B"
} else if (examGrade < 80 && examGrade >= 70) {
    result = "Grade C"
} else {
    result = "Grade D"
}
console.log(result); 

//Ternary operator 
//bentuk dari if else
/**
 * Aturan penulisan:
 let value : string = condition ? mainValue : optionValue;
*/

//LEARN! example 1 dan 2
usia = 5;
let verified: string = usia > 17 ? 'Berhasil' :  'GAGAL'
message = `Verifikasi usia ${email} ${verified}`;
console.log(message); 

//masukkan ke backthick 
usia = 29;
message = `Verifikasi usia ${email} ${usia > 17 ? 'Berhasil' : 'GAGAL'}`;
console.log(message); 

//SWITCH CASE
//pengkondisian yang bervalidasi pada kecocokan nilai, biasanya fokus ke data strict
/**
 * Aturan penulisan:
 * switch(variableOfValue){
 *      case "A":
 *          taskcode;
 *      case "B":
 *          taskcode;
 *      default:
 *          taskCode;
 * }
 **/

//example
let job: string = "Coder";
switch(job){
    case "Coder":
        console.log("Build a software");
        break;
        //break //bisa ditambahkan kalau ingin codenya berhenti berjalan;    
    case "Driver":
        console.log("Driving car");
    default: //ELSE
        console.log("I dont know");
}

//example
let food: string = "Buah";
switch(food){
    case "Noodle":
        console.log("This is a processed food");
    case "Sayur":
        console.log("This is a healthy food");
    default:
         console.log("Neither");
}

/** Exercise: buatlah program yang menentukan harga tiket berdasarkan usia.
usia di bawah 5 tahun : gratis
usia 5 s/d 17 tahun : 20.000
usia 17 s/d 60 tahun : 50.000
usia di atas 60 tahun : gratis
*/

let usiaPenumpang: number = 60;
let hargaTiket: string = "";//variable penampung output
if (usiaPenumpang < 5) {
    hargaTiket = "Gratis" 
} else if (usiaPenumpang >= 5 && usiaPenumpang <= 17 ) {
    hargaTiket = "20.000"
} else if (usiaPenumpang >= 18 && usiaPenumpang <= 60) {
    hargaTiket = "50.000"
} else if (usiaPenumpang > 60) {
    hargaTiket = "Gratis"
}
console.log(hargaTiket);
/**
key point: else if (kondisi) → ada syarat.
else → nggak boleh ada syarat.
kalau else ada (kondisi), pasti error.
 */

/**Exercise 2 
Buat pengkondisian email untuk memastikan data merupakan email atau bukan
*/

//INPUT email include @ and . in string
//PROCESS console.log(greeting.includes(","));
//OUTPUT

let emailAddress: string = "abc.com";
let syaratEmailFirst: string = "@"
let syaratEmailSecond: string = "."
let pesan = "";

if (emailAddress.includes(syaratEmailFirst) && emailAddress.includes(syaratEmailSecond)) {
    pesan = "Email terdeteksi"
}
else pesan = "Email tidak terdeteksi";
console.log(pesan);

// sama di atas namun menggunakan backthik
/**
Tanpa Backtick | Dengan Backtick
Gabung string ribet pakai + | Lebih simpel pakai ${}
Susah bikin multi-baris | Multi-baris langsung
*/
let pesanBackthik = "";
if (emailAddress.includes(syaratEmailFirst) && emailAddress.includes(syaratEmailSecond)) {
    pesanBackthik = `Alamat email anda "${emailAddress}" valid`
}
else pesanBackthik = "Email tidak terdeteksi";
console.log(pesanBackthik); 

//console log di tengah
//Inline Action in Control Flow - tanpa harus mendefinisikan variable
emailAddress = "haha@yahoo.com"

if (emailAddress.includes(syaratEmailFirst) && emailAddress.includes(syaratEmailSecond)) {
    console.log("Email terdeteksi");
} else {
    console.log("Email tidak terdeteksi");
}

//Langsung masukkan fungsi includes
let emailAddressAbc : string = "yy@yy.com"
if (emailAddressAbc.includes("@") && emailAddressAbc.includes(".")) {
    console.log("Email terdeteksi");
} else {
    console.log("Email tidak terdeteksi");
}
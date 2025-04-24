//Conditional statement : code yang ditunjukkan untuk memberikan pilihan eksekusi program sesuai kondisi yang diberikan
/**
 * if   : untuk satu kondisi
 * if ... else  : untul dua kondisi
 * if ... else if ...else ": untuk 3 kondisi atai lebih
 * switch...case: pengkondisian dalam bentuk validasi kecocokan nilai
 */
//contoh data
//let nama: string = "Edo";
//let usia: number = 20;
//let email: string = "edo@tensei.com";


//let message = "";
//if 


//usia = 18
//if (usia > 17) {
//    message = 'Verifikasi usia $(email) berhasil;
//    } else {
//        message = 'Verifikasi usia $(email)'
//    }

//IF STATEMENT
/**
 * Aturan penulisan:
 * if (condition){
 * -taskCode
 * }
 * note: 
 * -condition: kondisi yang diinginkan berdasarkan nilai boolean yang didapat dari comparison logical truthly falsy
 * -task code: kumpulan dari baris yang ingin dijalankan
 * 
 * exampleCode: memvalidasi batas usia tertentu
 * 
 * 
 */


//IF ELSE OF

let examGrade: number = 75;
let result: string = ""; //variable penampung output
if (examGrade >= 90) {
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
//let value : string = condition ? mainValue : optionValue;
//

//cara1
//usia: 11;
//let verified: string = usia > 17 ? 'Berhasil' ; 


//SWITCH CASE
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

let job: string = "Coder";

switch(job){
    case "Coder":
        console.log("Build a software");
        //break //bisa ditambahkan kalau ingin codenya berhenti berjalan;    
    case "Driver":
        console.log("Driving car");
    default: //ELSE
        console.log("I dont know");
}


let food: string = "Buah";

switch(food){
    case "Noodle":
        console.log("This is a procssed food");
    case "Sayur":
        console.log("This is a healthy food");
    default:
         console.log("Neither");
}

/**
 * exercise
 * < 5th : gratis
 * 5 - 17 : 20.000
 * 17 - 60 : 50.000
 * > 60th : gratis
 */

let usiaPenumpang: number = 30;
let hargaTiket: string; = "";//variable penampung output
if (usiaPenumpang < 5) {
    hargaTiket = "Gratis" 
} else if (usiaPenumpang >= 5 && usiaPenumpang <= 17 ) {
    hargaTiket = "20.000"
} else if (usiaPenumpang >= 18 && usiaPenumpang <= 60) {
    hargaTiket = "50.000"
} else (usiaPenumpang > 60) {
    hargaTiket = "Gratis"
}
console.log(hargaTiket); 

//buat pengkondisian email

let emailChar: string = "@gmail.com";
switch(emailChar){
    case "@gmail.com":
        console.log("Email detected");
    case "@rocket.mail":
        console.log("Email detected");
    case "@yahoo.com":
        console.log("Email detected");
    default: 
        console.log("Email not detected");
}
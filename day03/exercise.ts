/**
 * Write a code to check whether the number is odd or even
Example: 25 → odd number, 2 → even number

Write a code to check whether the number is prime number or not
Example: 7 → 7 is a prime number
Example: 6 → 6 is not a prime number

Write a code to find the sum of the numbers 1 to N
Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
Example: 3 → 1 + 2 + 3 = 6
 *  
 */

let angka: number = 20;
let oddOreven: string = "";

if (angka % 2 === 1) {
    oddOreven = "Angka genap";
} else {
    oddOreven = "Angka ganjil";
}

console.log(oddOreven); 

//INPUT
//the sum of 4
//PROCESS
// 4 : 1+2+3
//OUTPUT
// lop 1 + 2 + 3 +4
let sumOfnumbers: number = 0 
for (let x: number = 1; x < 4; x++) {
    sumOfnumbers= x
}
console.log(sumOfnumbers);

//INPUT
//Factorial of 5


let factorialNumber: number = 1 
for (let y: number= 1; y < 6; y++) {
    factorialNumber = factorialNumber * y
}
console.log(factorialNumber);

    
//PROCESS
// 4 : 1+2+3
//OUTPUT
//result of 5x4x3x2x1


/** 
 * ● Write a code to find the sum of the numbers 1 to N
 * Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
 * Example: 3 → 1 + 2 + 3 = 6
 * Write a code to find factorial of a number
 * Example: 4! → 4 x 3 x 2 x 1 = 24
 * Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
 * Write a code to print the first N fibonacci numbers
 * Example: 15 → 610
 * */
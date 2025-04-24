//Soal slide
/**
 * ● Write a code to display the multiplication table of a given integer.
 * Example : Number → 9
 * Output :
 * 9 x 1
 * 9 x 2...
 * 9 x 10

Write a code to check whether a string is a palindrome or not.
Example : ‘madam’ → palindrome

Write a code to convert centimeter to kilometer.
Example : 100000 → “1 km”
 */


//INPUT multiplication of 5
for (let i: number = 1; i < 11; i++) {
    console.log( "5x" +i);
}


let angka: number = 5;
for (let x = 1; x <= 10; ++x)
    console.log(angka + " * " + x);


let centiMeters: number = 2000000; 
let kiloMeters: number = centiMeters / 100000;
let conversion: string = kiloMeters + "km";

console.log(conversion); 

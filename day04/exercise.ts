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

/**
 * 
● Write a conditional statement to sort three numbers
○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
type.
○ Example : “hello” → 1

● Write a code to change every letter a into * from a string of input
○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
 */

//input 1 string, 2 number, 3 other data type

let price: number = 525000;
console.log(price.toString()); 
console.log(price.toLocaleString("id-ID", {

}));

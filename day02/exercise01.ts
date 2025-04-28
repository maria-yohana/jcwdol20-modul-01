/**
 * //contoh: total belanja
    INPUT: datanya apa?
    PROCESS: hargaBarang * jumlahBarang - process Arithmetic
    OUTPUT:  totalBelanja
 **/

//Redoing the exercise: https://drive.google.com/drive/u/0/folders/10Jwj6hMeRO36f6tGP5EY94ca_eAYvWf0

/**
Soal no 1:
    Write a code to find area of rectangle.
    Example : length = 5, width = 3
    Output : 15
**/
    //INPUT = data! lebarRectangle, panjangRectangle
    //PROCESS = Kita tahu bahwa areaRectangle = l x p maka arithmetic
    //OUTPUT = luasRectangle
let lebarRectangle: number = 5;
let panjangRectangle: number = 3;
const areaRectangle: number = lebarRectangle * panjangRectangle
console.log(areaRectangle); 

/**
Soal no 2:
    //INPUT = data! lebarRectangle, panjangRectangle
    //PROCESS = perimeter lx2 + px2
    //OUTPUT = kelilingRectangle
 */
//menggunakan let di atas
const kelilingRectangle: number = (lebarRectangle * 2) + (panjangRectangle *2);
console.log(kelilingRectangle); 

/**
Soal no 3:
    //INPUT = data! r lingkaran
    //PROCESS = d=r*2 , circumference = 2*pi*r, area = pi.r.r 
    //Output = d, circumference, area
 */ 
let rujiLingkaran: number = 5;
const diameterLingkaran: number = rujiLingkaran * 2;
const kelilingLingkaran: number = 2 * rujiLingkaran * Math.PI;
const luasLingkaran: number = Math.PI * rujiLingkaran * rujiLingkaran
console.log(diameterLingkaran);
console.log(kelilingLingkaran);
console.log(luasLingkaran);

/**
Soal no 4:
    INPUT: triangle's angle(s)
    PROCESS: total triangle angles = 180
    OUTPUT: oneoftheAngles
**/
let angleAsegitiga: number = 80;
let angleBsegitiga: number = 65;
const angleCsegitia: number = 180 - (angleAsegitiga +angleBsegitiga);
console.log(angleCsegitia);
console.log(`${angleCsegitia}°`);
//qOftheday = INI DATA TERAKHIR OUTPUTNYA JADI STRING YA?

/**
Soal no 5: 
    //INPUT: days
    //PROCESS: conversion to years, months days
    //OUTPUT: year, months, days
**/ 
let totalDays: number = 366;
let yearTomonth: number = 12;
let yeartoDays: number = 365;
let monthToDays: number = 30;

const convertYear: number = totalDays / yeartoDays;
const convertMonth: number = totalDays % 365 / 30;
const convertDays: number = totalDays % 365 % 30;
console.log(Math.floor(convertYear) +  "tahun"); 
console.log(Math.floor(convertMonth) + " bulan");
console.log(Math.floor(convertDays) + " hari");

/**
Soal no 6: 
 */

/**
● Write a code to get difference between dates in days.
○ Example : date1 = 2022-01-20, date2 = 2022-01-22
○ Output : 2
 */
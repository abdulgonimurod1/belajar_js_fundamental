// var fullName = " Abdul Goni Murod";
// var greeting  = "Hello";

// console.log(greeting + fullName);

// var and let

// hoisting
// console.log(bar);

// let userName = "Goni";

// var foo = "bar";

// const bar = "foo";

// scope

// for (let i = 0; i < 4; i++) {
//     console.log("hello")
// }

// console.log(i);

const projectTitle = document.querySelector('.heading-title');
projectTitle.textContent = "Title Baru dari JS File";

// var thisIsFunction = "function";

// const PI = 3.14;

// var y = 2;
// var z = 5;

// var x = y + z;

// function sumNum(a, b) { 
//     return a + b;
// }

// var iniSebuahVar = "Variable";

// iniSebuahVar = "Variable Baru";

// console.log(iniSebuahVar);

// Ini Komen satu baris

/**
 Ini adalah komen 
 lebih dari 
 satu baris.
*/

// Type data
/** Number

let number = 2020;
let numberFrictional = 20.19;

 let veryBigNumber = 1.889e6 // 188.900.000
*/

/** Aritmatik Operator
    
 

let additional = 1000 + 500;

let substraction = 1000 - 500;

let multiplication = 100 * 5;

let division = 100 / 5;

// Presedence atau order of arithmetics

let edgeCase = 100 + (4*2);

// modulus atau remainder = %

let modulus = 320 % 100;

let even = 27 % 4;

*/

/** Special Numbers
 
 let specialNum1 = Infinity;
 
 let specialNum2 = -Infinity;
 
 let specialCase = Infinity - 1;
 
 let specialNum3 = NaN;
 
 let specialCase2 = "five" - 0;
 
 */

/** 
//  String

let string1 = "Ini adalah string";
let string2 = 'Ini adalah string2';
let string3 = `Ini adalah string3`;

let multilineString = "Ini adalah paragraph 1\nDan ini adalah paragraph 2"
let multilineString2 = `Ini adalah paragraph 1 dengan backtic
Dan ini adalah paragraph 2
`

let firstName = "Bambang";
let lastName = "Pamungkas";
let shirtNumber = 20;
 
// String Concatenates
let namaLengkap = firstName + ' ' + lastName

let namaLengkap2 = `${firstName} ${lastName} ${shirtNumber}`;
*/

/**
Type conversion or coercion

console.log("100" - 50);

console.log("100" + 50);

console.log(8 * null);

console.log('five' * 4);

*/

/** 
// Boolean

let yes = true;
let no = false;

// Comparison

// console.log(2>=2)

console.log("Apple" == "Orange")

*/

/** 
// Logical operators and advanced comparison

let firstName = "Abdul";
let shirtNumber = 8

// console.log(firstName == "Abdul") // Loose comparison
// console.log(shirtNumber === "8") // Strict comparison


// console.log(true && false); // &&


// console.log(true || false) // ||

let yes = !false;

console.log(yes) // !

*/

// Array

let makananFavorit = ["Mie Ayam", "Seblak", "Bakso"];

// Objects

let biodataObject = {
    firstName: "Abdul",
    lastName: "Goni Murod",
    makananFavorit: ["Mie Ayam", "Seblak", "Bakso"],
    istri: {
        firstName: "no Name",
        lastName: "infinity"
    }
}

console.log(biodataObject);
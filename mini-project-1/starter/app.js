
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

/**

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

*/

/** 

// return values

alert("Ini adalah sebuah alert")
console.log(Math.round(1));

*/

/** 
 
// Control Flow

let yourName = String(prompt("What is your name?"));

alert(`Your name is ${yourName}?`)

*/

/** 
// Conditional Execution

// if else
let tahunLahir = Number(prompt("Kapan tahun lahir kamu?")); 

// if (2023 - tahunLahir < 18) {
//     alert("Kamu dibawah umur");
// } else if(2023 - tahunLahir > 18 && 2023 - tahunLahir <= 40) {
//     alert('Kamu sudah dewasa')
// } else if(2023 - tahunLahir > 40) {
//     alert('Kamu sudah tua')
// } else{
//     alert('Kamu sudah meninggal')
// }

// ternary Operator (digunakan ketika dua cabang saja)
//2020 - tahunLahir < 17 ? alert("Kamu dibawah umur") : alert("Kamu sudah dewasa"); //react

*/

/**
 * 
// Switch case

let cuacaHariIni = prompt("Bagaimana cuaca hari ini?");

switch (cuacaHariIni) {
    case "hujan":
        alert("Silahkan diam dirumah saja");
        break;
    case "mendung":
        alert("Jangan lupa bawa payung");
        break;
    case "berawan":
        alert("Silahkan main diluar");
        break;
    case "panas":
        alert("hati-hati gosong");
        break;        
    default:
        alert("cuaca tidak dapat diramal");
        break;
}

*/

/** 

// Looping

let count = 0;

// While

// while (count <= 12) {
//     console.log(count)
//     count = count + 1;
// }

// Do While

// do {
//     console.log(count);
//     count = count + 2;
// } while(count <= 12)

*/
/** 
// For Loops

for (let i = 0; i <= 100; i++) {
    console.log(i); 
}

for (let i = "*****"; i.length = 1; i = i - "*") {
    console.log(i)
    
}

*/
/** 
// Functions

// Function definition

const perpangkatan = function(n){
    if (n == undefined) {
        return 2 * 2
    }

    return n * n
}

// ES6 Arrow Function

const perpangkatan = (n = 2) => {
    return n * n
}

const perpangkatan = n => n * n; // versi satu line

// Function side-effect

function sayHello(){
    alert("Hello!")
}

console.log(perpangkatan(5));

*/

// Array

// const array = [1, 2, 3,4,5]

// for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] * 2 
// }

// console.log(array)

// console.log(array[0] = "satu")
// console.log(array)

// Push method
// array.push(6);

// console.log(array);

// Pop Method

// array.pop()

// console.log(array);

// Unshift method

// array.unshift(0);

// console.log(array)

// Shift method

// array.shift();

// console.log(array)

// Slice


// let hewanYangDitangkap = animals.slice(2)

// console.log(hewanYangDitangkap)

// Splice

// animals.splice(2, 1, "Anjing");

// animals.splice(1,2);

// console.log(animals);

// forEach

// const animals = ["Kucing","Jerapah","Kambing","Kuda",]

// animals.forEach(myFunction)

// function myFunction(value){
//     console.log(value + ' hidup')
// }

// Map

// const numbers = [10,20,30,40,50]

// const numbersMultiplied = numbers.map(multiply)

// function multiply(value) {
//     return value * 2
// }

// console.log(numbersMultiplied)

// Filter

// const age = [25, 9, 10, 11, 15, 28, 30];

// const filterAge = age.filter(myFunction)

// function myFunction(value) {
//     return value >= 17 
// }

// console.log(filterAge)

// Object

// const person = {
//     name:{
//         firstName: "Abdul",
//         lastName: "Goni",
//     },
//     age: 21,
//     nationality: "Indonesia"
// }

// const person2 = new Object()
// person2.firstName = "Abdul";
// person2.lastName = "Patah";
// person2.age = 23;
// person2.nationality = "Indonesia";

// console.log(person)

// Add & Edit Properties in Object

// person.hairColor = "Black";
// person.name.lastName = "Murod"

// const personName = person.name.firstName

// Delete Property Object

// delete person.nationality

// Object Keys

// const objects = {a:1, b:2, c:3}

// console.log(Object.keys(objects))

// Object Assign

// const object1 = {a:1, b:2, c:3};
// const object2 = {c:4, d:9};

// Object.assign(object1,object2);

// console.log(object1)

// Array of Objects

// const todos = [
//     {
//         text: "Ini adalah tugas 1",
//         isCompleted: false
//     },
//     {
//         text: "Ini adalah tugas 2",
//         isCompleted: true
//     },
//     {
//         text: "Ini adalah tugas 3",
//         isCompleted: false
//     },
//     {
//         text: "Ini adalah tugas 4",
//         isCompleted: true
//     }
// ];

// const unCompletedTask = todos.filter(myFunction);

// function myFunction(value){
//     if (value.isCompleted === false) {
//         return value
//     }
// }

// Versi Arrow Function

// const unCompletedTask = todos.filter(value => {
//     if (value.isCompleted === true) {
//         return value
//     }
// });

// console.log(unCompletedTask)



// Scope

// Global Scope

// var globalVar = "global variable"

// console.log(window.globalVar)

// const name = "Abdul Goni Murod" //Global Scope

// Local Scope
// function myFunction(){
//     const name = "Abdul Goni"

//     console.log(name)
// }

// myFunction()



// Hoisting

// Hoisting Variable

// x = 10; // assigning
// y = 30; // assigning


// var x; // declaration

// var y = 7 // variable initialization

// Hoisting Function


// function declaration
// function myFunction() {
//     console.log("hello hoisting")
// }

// function expression or definition

// var myFunctionExp = function(){
//     console.log("Hello hoisting")
// }

// console.log(myFunctionExp());



// Kumpulkan semua UI element

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");


todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
clearButton.addEventListener("click", clearTodos);


function addTodo(e){
    e.preventDefault();

    if (todoInput.value) {
        
            // Membuat li element
        
            const li = document.createElement("li")
            li.className = "list-group-item d-flex justify-content-between align-items-center mb-1"
        
            // Menambahkan children ke dalam element li
            li.appendChild(document.createTextNode(todoInput.value));
            // Membuat delete button
            const a = document.createElement("a")
        
            // memberi property untuk a element
            a.href = "#"
            a.className = "badge badge-danger delete-todo"
        
            a.innerHTML = "Delete"
        
            // menyelipkan element a ke dalam children li
        
            li.appendChild(a)
        
            // Memasaukkan elemen li yang telah dibuat dengan javascript
            // ke dalam elemen todolist
            todoList.appendChild(li)    
        
            todoInput.value = ""

    }  else {
        alert("Todo tidak boleh kosong!")
    }
}

function deleteTodo(e){
    e.preventDefault();

    if(e.target.classList.contains("delete-todo")) {

        if(confirm("Apakah yakin akan menghapus?")){

            const parent = e.target.parentElement;
    
            parent.remove();
            
        }
    }
}

function clearTodos(e){
    todoList.innerHTML = ""
}


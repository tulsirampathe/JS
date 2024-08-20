// Primitive -> Call by value
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "Tulsiram" // string

const score = 100 // number
const scoreValue = 100.3 // number

const isLoggedIn = false // boolean
const outsideTemp = null // null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false

const bigNumber = 349374139473493473954387n


// Reference type (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "tulisram",
    age: 33,
}

const myFunction = function () {
    console.log("Hello World!")
}

// console.log(typeof myFunction);



// **************************************************

// Stack (Primitive) , Heap (Non-Primitive)

// Stack -> give value's or copy
// Heap -> give a reference or address

let myYoutubename = "tulsirampathe.com"

let anothername = myYoutubename;
anothername = "chaiaurcode"

// console.log(myYoutubename);

// console.log(anothername);


let userOne = {
    email: "user@gmail.com",
    upi: "user@ypl"
}

let userTwo = userOne;

userTwo.email = "pathe@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



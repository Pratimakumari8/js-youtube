//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
} // data type is function object

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
// if we try to find the data type of null using typeof then object will be output
// if we try to find the data type of undefined using typeof then undefined will be output


//Stack (Primitive), Heap (Non- Primitive)
let myYoutubename = "hiteshchoudharydotccom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename); //hiteshchoudharydotcom
console.log(anothername);  //chaiaurcode

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "Pratimakum@gmail.com"

console.log(userOne.email); // output Pratimakum@gmail.com
console.log(userTwo.email); // output Pratimakum@gmail.com

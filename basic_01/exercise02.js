                     // Datatypes

// Primitive datatypes->

// String, Number, BigInt, Boolean, Undefined, Null, Symbol

// let age = 25;
// let price = 12.99;
// let isname = "John Doe"
// let isStudent = true;
// let emptyValue = null;
// let unassignedValue;
// let uniqueID = Symbol('id');
// let bigNumber = BigInt(123456789012345678901234567890);

// console.log(typeof age)
// console.log(typeof price)
// console.log(isname)
// console.log(isStudent)
// console.log(emptyValue)
// console.log(unassignedValue)
// console.log(uniqueID)
// console.log(bigNumber)



// References Datatypes ->

// Array, Object, Function, Date, Regex

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log(person)

let colors = ["red", "green", "blue"];
console.log(typeof colors)
function greet() {
    console.log("Hello, World!");
}
console.log(typeof greet)
let currentDate = new Date();
console.log(currentDate)


// Memory ->
// Stack (Primitive), Heap (Non- Primitive)

// Stack: Used for static memory allocation and holds primitive data types and 
// references to objects and functions.

// Primitive types are stored in the stack
let number = 42; 
let booleanValue = true; 



// Heap: Used for dynamic memory allocation and holds objects and functions.

// Objects and functions are stored in the heap
let object = { name: "John", age: 30 };
let array = [1, 2, 3];
let func = function() { console.log("Hello!"); };
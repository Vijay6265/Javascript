// const user = {
//     username: "Vijay",
//     price: 344,
//     location: "Noida",

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`);
//         // console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username = "Manju";
// user.welcomeMessage();

// user.welcomeMessage(this)
// console.log(this);

// function books(){
//     let username = "Vijay"
//     console.log(this.username) // this.username cannot defined in function only for objects

// }
// books()


// const books = function(){
//     let username = "Vijay"
//     console.log(this.username)
// }


// Arrow Function

// const book = () => {
//     let username = "Vijay"
//     console.log(this);
// }
// book();


// const addtwo = (num1, num2) => {
//     return num1+num2;
// }
// console.log(addtwo(4,7));

// const addtwo = (num1, num2) => num1+num2;
// console.log(addtwo(4,7));

// const addtwo = (num1, num2) => (num1+num2);
// console.log(addtwo(4,7));

// const addtwo = (num1, num2) => ({name: "Vijay"});

// console.log(addtwo(4,7));


// IIFE  (Immediately Invoked Function Expressions)

// (function book(){
//     console.log(`DB Connected: `);
// })();

((name) => {
    console.log(`DB Connected: ${name} `);
})("Vijay");


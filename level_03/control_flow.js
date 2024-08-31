//                  Control Flow

//          <, >, <=, >=, ==, ===, !=, !== 
//          loop -> while, do-while, for
//          statement -> if-else statement, switch-statement
// Logical Operator -> &&, ||


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined,nan

// truthy values
// "0", "false", 'false', " ", [], {}, function(){}

const UserLoggedIn = true;

// if(2 === "2"){
//     console.log("Executed");
// }


const month = "March"

switch(month){
    case 1:
        console.log("January");
        break;
    case "March":
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("Case Does Not Match");
    break;

}


// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): null undefined

let vall;
// vall = 7 ?? 10;
// vall = null ?? 10;
// vall = undefined ?? 15;
// vall = null ?? 10 ?? 12;

// console.log(vall);


// Ternary Operator

// Condition ? true : false

const bookPrice = 200;
bookPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
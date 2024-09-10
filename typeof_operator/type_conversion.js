/*
JavaScript Type Conversion
JavaScript variables can be converted to a new variable and another data type:

By the use of a JavaScript function
Automatically by JavaScript itself
*/

// Converting Strings to Numbers
/*
 The global method Number() converts a variable (or a value) into a number.
A numeric string (like "3.14") converts to a number (like 3.14).

An empty string (like "") converts to 0.

A non numeric string (like "John") converts to NaN (Not a Number).
*/
// Number Methods

// Number() -> Returns a number, converted from its arguments
// parseFloat() => Parses a string and returns a floating point number
// parseInt() => Parses a string and returns an integer


// The Unary + operator
// let y="4";
// let x = +y;
// console.log(x); // Output: 4


// let y = "Vijay";
// let x = + y;
// console.log(x); // Output: NaN


// Converted Numbers to Strings
// The global method String() can convert numbers to strings.
// let num = 123;
// let str = num.toString();
// console.log(str);

// let num1 = 123;
// let num2 = 164;
// let str1 = num + ' ' + num2;
// console.log(str1);

// let num3 = 134;
// let str3 = String(num);
// console.log(str3);


// // toExponential()
// let num = 32533232;
// let str = num.toExponential(3);
// console.log(str);


// toFixed();
// let num = 123.422443
// let str = num.toFixed(2);
// console.log(str);

// // toPrecision();
// let num = 123.422443
// let str = num.toPrecision(2);
// console.log(str);


// Converting Dates to Numbers

// let d = new Date();
// // console.log(d);
// console.log(Number(d));

// let d = new Date();
// console.log(d);
// console.log(d.getTime());



// Converting Dates to Strings
/*
Method	Description
getDate()	     => Get the day as a number (1-31)
getDay()	     => Get the weekday a number (0-6)
getFullYear()	 => Get the four digit year (yyyy)
getHours()	     => Get the hour (0-23)
getMilliseconds()=> Get the milliseconds (0-999)
getMinutes()	 => Get the minutes (0-59)
getMonth()	     => Get the month (0-11)
getSeconds()	 => Get the seconds (0-59)
getTime()	     => Get the time (milliseconds since January 1, 1970)
*/


// let d = new String(Date());
// console.log(d);

// let d = new Date().toString();
// console.log(d);
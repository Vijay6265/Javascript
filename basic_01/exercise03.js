// Strings
// You can create strings using single quotes ('), double quotes ("), or backticks (`) for template literals:

let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, World!`;
console.log(singleQuoteString)
console.log(doubleQuoteString)
console.log(templateLiteralString)

let text = "Hello, World!";
console.log(text.length); // Outputs: 13


let text1 = "Hello";
console.log(text1[0]); // Outputs: H
console.log(text1.charAt(0)); // Outputs: H

let greeting = "Hello, ";
let name1 = "Alice";
let message = greeting + name1; // Outputs: Hello, Alice
let message2 = greeting.concat(name1); // Outputs: Hello, Alice


let name2 = "Alice";
let greeting1 = `Hello, ${name2}!`; // Outputs: Hello, Alice!


let text2 = "Hello, World!";
console.log(text2.toUpperCase()); // Outputs: HELLO, WORLD!
console.log(text2.toLowerCase()); // Outputs: hello, world!
console.log(text2.substring(0, 5)); // Outputs: Hello
console.log(text2.indexOf("World")); // Outputs: 7
console.log(text2.replace("World", "JavaScript")); // Outputs: Hello, JavaScript!

/*
Escape Characters
To include special characters in a string, you can use escape characters:

\' for single quote
\" for double quote
\\ for backslash
\n for new line
\t for tab
*/

let text3 = "He said, \"Hello, World!\"";
console.log(text3); // Outputs: He said, "Hello, World!"


let stringObject = new String("Hello, World!");
console.log(stringObject); // Outputs: [String: 'Hello, World!']

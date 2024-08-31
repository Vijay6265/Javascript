
// Array of student objects
const students = [
    { name: "Alice", scores: [85, 92, 88, 96] },
    { name: "Bob", scores: [78, 81, 85, 89] },
    { name: "Charlie", scores: [95, 90, 92, 94] },
    { name: "David", scores: [70, 75, 78, 72] }
];

let highestScore = 0;

// Iterate through each student
for (let i = 0; i < students.length; i++) {
    let totalScore = 0;
    let scoreCount = students[i].scores.length;

    // Iterate through each score of the current student
    for (let j = 0; j < scoreCount; j++) {
        let score = students[i].scores[j];
        totalScore += score;

        // Check if this score is the highest we've encountered
        if (score > highestScore) {
            highestScore = score;
        }
    }

    // Calculate the average score for the current student
    let averageScore = totalScore / scoreCount;
    console.log(`${students[i].name}'s average score: ${averageScore.toFixed(2)}`);
}

// Output the highest score among all students
console.log(`Highest score among all students: ${highestScore}`);


// for loop

// syntax -> 
// for (initialization; condition; increment) {
//     // code to be executed
// }

// example ->
// for (let i = 0; i < 5; i++) {
//     console.log(`Iteration ${i}`);
// }

// foreach -> The forEach method is used to execute a 
        // provided function once for each array element.

// syntax ->
// array.forEach(function(element, index, array) {
//     // code to be executed
// });

// // example ->
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num, index) => {
//     console.log(`Index ${index}: ${num}`);
// });

// for...of Loop -> The for...of loop is used to iterate over iterable
            //  objects (like arrays, strings, or NodeLists).

// syntax ->
// for (const element of iterable) {
//     // code to be executed
// }

// // example ->
// const array = ['a', 'b', 'c', 'd'];
// for (const letter of array) {
//     console.log(letter);
// }

// for...in Loop ->The for...in loop is used to iterate over the enumerable properties of an
        //  object (or indices in the case of an array).

// syntax ->
// for (const key in object) {
//     // code to be executed
// }

// // example ->
// const person = { name: "Alice", age: 25, city: "New York" };
// for (const key in person) {
//     console.log(`${key}: ${person[key]}`);
// }


// for await...of Loop -> The for await...of loop is used to iterate over async iterable objects. It allows you 
    // to await the resolution of promises within the loop.

    // Syntax ->
    // for await (const element of asyncIterable) {
    //     // code to be executed
    // }

    // // example ->
    // async function fetchData(urls) {
    //     const responses = [];
    //     for await (const url of urls) {
    //         const response = await fetch(url);
    //         responses.push(await response.json());
    //     }
    //     return responses;
    // }
    
    // const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];
    // fetchData(urls).then(data => console.log(data));
    

    

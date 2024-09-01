// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,23,4,5,6,7]

// for (const num of arr){
//     console.log(num)
// }


// const greeting = "Hello world!"

// for (const greet of greeting){
//     if(greet == " "){
//         break;
//     }
//     console.log(greet)
// }


// Maps

const map = new Map()
map.set('IN',"INDIA");
map.set('USA',"United States of America")
map.set('Fr',"France");
map.set('IN',"INDIA");

// console.log(map);

// for(const [key, value] of map){
//     // console.log(key);
//     // console.log([key]);
//     console.log(key," -> ", value);
// }


// const myObj = {
//     game:'NFS',
//     game:'Spiderman'
// }
// for(const key in myObj){
//     console.log(`${key} shortcut is for ${myObj[key]}`);
// }


// for each

const coding = ["js","cpp","c","java","python"]
// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item)
// })

// coding.forEach( (item, index, arr) => {
//         console.log(item, index, arr)
//     })

const mycoding = [
    {
        languageName: "javascript",
        languagefilename: "js"
    },
    {
        languageName: "java",
        languagefilename: "java"
    },
    {
        languageName: "python",
        languagefilename: "py"
    },
    {
        languageName: "C#",
        languagefilename: "cs"
    }
]
    
// mycoding.forEach( (item) => {
//     console.log(item.languageName)
// })


// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => {
//     return num > 4
// })
// console.log(newNums);


const books = [
    {
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 10.99,
      edition:2005
    },
    {
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 8.99,
      edition:2008
    },
    {
      name: "1984",
      author: "George Orwell",
      price: 12.49,
      edition:2009
    },
    {
      name: "Pride and judice",
      author: "Jane Austen dsf",
      price: 7.99,
      edition:2003
    },
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 10.99,
        edition:2005
      },
      {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 8.99,
        edition:2008
      },
      {
        name: "1984",
        author: "George Orwell",
        price: 12.49,
        edition:2009
      },
      {
        name: "Pride and Prejudice",
        author: "Jane Austen",
        price: 7.99,
        edition:2003
      },
      {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 10.99,
        edition:2005
      },
      {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 8.99,
        edition:2008
      },
      {
        name: "1984",
        author: "George Orwell",
        price: 12.49,
        edition:2009
      },
      {
        name: "Pride and Prejudice",
        author: "Jane Austen",
        price: 7.99,
        edition:2003
      }
  ];
  
  const userBooks = books.filter( (bk) =>bk.author === "Jane Austen")

//   console.log(userBooks)



// channing method

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map((num) => num * 10).map((num) => num+1)
// console.log(newNums)


// Reduce Array

const myNums = [1,2,3,4,5]
const initial = 0;
const myTotal = myNums.reduce(function (acc, currval) {
    return (acc + currval)
},initial)

console.log(myTotal)

 
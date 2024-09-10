// A maps hold key value pairs where the keys can be any datatype.
// a map remembers the original insertion order of the keys.

// new map() method

const animal = new Map([
    ["Cow",1],
    ["dog",2],
    ["elephant",3],
    ["buffalo",4]
])

// set method -> You can add elements to a Map with the set() method:
animal.set("lion",5);
animal.set("cheetah",6);


// get method ->The get() method gets the value of a key in a Map:
// const getAnimal = animal.get("lion");
// const getAnimal = animal.get(5);
// console.log(getAnimal);


// map.size ->The size property returns the number of elements in a map:
// const sizeAnimal = animal.size;
// console.log(sizeAnimal)


// map.delete(); -> The delete() method removes a map element:
// const deleteAnimal = animal.delete("lion");
// console.log(deleteAnimal);


// Map.clear() -> The clear() method removes all the elements from a map:
// animal.clear();
// console.log(animal.size);


// Map.has() -> The has() method returns true if a key exists in a map:
// animal.delete("dog");
// const hasAnimal = animal.has("dog");
// console.log(hasAnimal);


// Map.forEach() -> The forEach() method invokes a callback for each key/value pair in a map:
// let text = " ";
// animal.forEach(function(value, key){
//     text += key + ' ' + value + ", ";
// })
// console.log(text)


// Map.entries() -> The entries() method returns an iterator object with the [key,values] in a map:
// let text = "";
// for(const x of animal.entries()){
//     text += x + " ";
// }
// console.log(text);


// Map.keys() -> The keys() method returns an iterator object with the keys in a map:
// let text = "";
// for(const x of animal.keys()){
//     text += x + " ";
// }
// console.log(text);


// Map.values() -> The values() method returns an iterator object with the values in a map:
// let text = "";
// for(const x of animal.values()){
//     text =+ x;
// }
// console.log(text);


// Map.groupBy() -> The Map.groupBy() method groups elements of 
// an object according to string values returned from a callback function.
// The Map.groupBy() method does not change the original object.

// Create an Array
const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Group by Quantity
  const result = Map.groupBy(fruits, myCallback);
console.log(result);  



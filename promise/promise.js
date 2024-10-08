/*
const onePromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async Task Completed")
        resolve();
    },2000);
});
onePromise.then(function(){
    console.log("Promise Complete");
})


new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async Task 2 Completed")
        resolve();
    },2000);
}).then(function(){
    console.log("Promise 2 Complete");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "vijay@gmail.com"})
    },1000);
})
promiseThree.then(function(user){
    console.log(user);
})
*/

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
    if(!error){
        resolve({username: "Vijay", password:"12345"})
    }else{
        reject('ERROR: Something went wrong');
    }
    },1000)
    
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> {
    console.log("The promise is either resolved or rejected")
})



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"Manju", password:"12345"});
//         }
//         else{
//             reject('ERROR: JS went wrong');
//         }
//     },1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive();



// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("Error: ", error);
//     }
// }
// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/todos')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task is Complete: ');
//         resolve();
//     },2000);
// })

// promiseOne.then(() => {
//     console.log("Promise Comsumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },2000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "Vijay", email:"vijay@example.com", password:"1234"})
//         }else{
//             reject('Error: Something went wrong');
//         }
//     },1000)
// })
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
    
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => {
//     console.log("the promise is either resolved or reject:");
// })


async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("Error: ", error)
    }
}
getAllUsers();




// Singleton 
// const user1 = new Object()

const user = {}
user.id = "123abc"
user.name = "Sammy"
user.isLoggedIn = false


const user2 = {
    email: "someone@gmail.com",
    fullname: {
        username:{
            firstname:"Vijay",
            lastname: "Maurya"
        }
    }
}
// console.log(user2.fullname.username.firstname)
 
const obj1 = {1:"a", 2:"b",3:"c"};
const obj2 = {4:"d", 5:"e"}

// const obj3 = {obj1, obj2};
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "Vij@y.com"
    },
    {
        id: 1,
        email: "Vij@y.com"
    },
    {
        id: 1,
        email: "Vij@y.com"
    },
    {
        id: 1,
        email: "Vij@y.com"
    },
    {
        id: 1,
        email: "Vij@y.com"
    },
    {
        id: 1,
        email: "Vij@y.com"
    },
]

// users[1].email
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));




// Object k 

//  Object literals

const mySym = Symbol("keys");

const JsUser = {
    name: "Vijay",
    "full name": "Vijay Maurya",
    [mySym]:"Mykeys",
    age:21,
    location: "Ayodhya",
    email: "vijaymauryagoogle@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser);
// console.log(typeof JsUser);
// console.log(typeof JsUser.name)
// console.log(typeof JsUser["full name"])
// console.log(typeof JsUser[mySym])

// JsUser.email = "manjumaurya@gpt.com"
// console.log(JsUser.email)

// Object.freeze(JsUser)
// JsUser.email = "Manju@chatgpt.com"
// console.log(JsUser.email)


JsUser.greeting = function(){
    console.log("Hello jiiii...");
}

JsUser.greeting2 = function(){
    console.log(`Hello jiiii...${this["full name"]}`);
    console.log(`Hello jiiii...${this.name}`);
}

// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());




const course = {
    coursename: " Js in hindi",
    price: "9999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor)
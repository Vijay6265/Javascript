function add(val){
    return val+val
}

function mulTwo(val){
    return val*2
}

function square(val){
    return val*val
}

// function print(val){
//     while(val<10){
//         console.log(val)
//         val++
//     }
// }

// const res = print(5);

// function compose(f1,f2){
//     return function(a,b){
//          return f2(f1(a,b))
//     }
// }

// const result = compose(add, mulTwo)
// console.log(result(2,3))

    // const composeTwo=(f1,f2,f3) => (a,b) => f3(f2(f1(a,b)))

    // const result = composeTwo(add, mulTwo,square)
    // console.log(result(2,3))

    // function composeAll(...funs){
    //     return function(...values){
    //         return funs.reduce((val,fn) => fn(val),values)
    //     }
    // }

    const composeAll = (...funs)=>(...values)=>funs.reduce((val,fn) => fn(val),values)
    const result = composeAll(add, mulTwo, square)
    console.log(result(6))
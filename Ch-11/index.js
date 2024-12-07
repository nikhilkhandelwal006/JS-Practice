//# Sync-Async in JS:

//Synchronous-->

// synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

// console.log("one");
// console.log("two");
// console.log("three")

//Asynchronous-->

// Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.


// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(() => {
//     console.log("hello")
// }, 4000); //timeout;


// console.log("four");
// console.log("five");




//# Callbacks:

// A Callback is a function passed as an argument to another function.

// function sum(a,b){
//     console.log(a+b)
// }

// function calculator(a , b, sumCallback){
//     sumCallback(a,b)
// }

// calculator(1,2, sum)




// const hello=()=>{
//     console.log("hello")
// }

// setTimeout(hello,4000)   // this is also a callback function




//# Callback Hell:

// Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of Boom)


// This style of programming become difficult to understand & manage.


// nesting

// let age=19;
// if(age>=18){
//     if(age>=60){
//         console.log("Senior")
//     }else{
//         console.log("middle")
//     }
// }else{
//     console.log("child")
// }


// for(let i=0; i<5; i++){
//     let str=""
//     for(j=0; j<5; j++){
//         str=str+j
//     }
//     console.log(i,str)
// }




// function getData(dataid, getNextData){
//     setTimeout(()=>{
//         console.log("data",dataid)
//         if(getNextData){
//             getNextData()
//         }
//     },2000)
// }


// //callback hell
// getData(1, ()=>{
//    console.log("getting data2...")
//     getData(2,()=>{
//         console.log("getting data3....")
//         getData(3,()=>{
//             console.log("getting data4...")
//             getData(4)
//         })
//     })
// })












// # Promises:

// Promise is for "eventual" completion of task. It is an object in JS.
// It is a solution to callback hell.


// let promise=new Promise((resolve,reject)=>{...})

// ** resolve & reject are callbacks provided by JS




//ex-1
// let promise= new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     // resolve(123)
//     // resolve("success")
//     // reject("some error")
// })



//ex-2
// function getData(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataid) 
//             // resolve("success")
//             // reject("error")
         
//         },5000)
//     })
   
// }

// let result=getData(123)




//ex-3
// const getPromise=()=>{
//   return  new Promise((resolve, reject) => {
//         console.log("I am a promise")
//         // resolve("success")
//         reject("error")
//     })
// }

// let promise= getPromise()
// promise.then((res)=>{
//     console.log("promise fullfilled",res)
// })

// promise.catch((err)=>{
//     console.log("rejected",err)
// })




//ex-4
// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1")
//             resolve("success")
//         }, 4000);
//     })
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2")
//             resolve("success")
//         }, 4000);
//     })
// }


// console.log("fetching data1")
// asyncFunc1().then((res)=>{
//     console.log(res)
//     console.log("fetching data2")
// asyncFunc2().then((res)=>{
//     console.log(res)
// })
// })





// ex-5 
// function getData(dataid){
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("data",dataid)
//         resolve("success")
//     },5000)
//    })
// }



//promise chain/chaining

// getData(1).then((res)=>{
//     console.log(res)
//     getData(2).then((res)=>{
//         console.log(res)
//     })
// })


// getData(1).then((res)=>{
//     return getData(2)
// }).then((res)=>{
//     return getData(3)
// }).then((res)=>{
//     console.log(res)
// })






// # Async- Await:

// async function always return a promise.

// async function myFunc(){...}

// await pauses the execution of its surrounding async function until the promise is settled.


// ex-1
// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("weather data")
//             resolve(200)
//         }, 2000);
//     })
// }

// async function getWeatherData(){
//     await api() //1st call
//     await api() //2nd call
// }



// ex-2
function getData(dataid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataid)
            resolve("success")
        }, 2000);
    })
}

async function getAllData() {
    console.log("getting data 1")
    await getData(1)
    console.log("getting data 2")
    await getData(2)
    console.log("getting data 3")
    await getData(3)
    console.log("getting data 4")
    await getData(4)
    console.log("getting data 5")
    await getData(5).then((res)=>{
        console.log(res)
    })
}
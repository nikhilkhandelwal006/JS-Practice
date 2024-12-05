//# Sync-Async in JS:

//Synchronous-->

// synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

console.log("one");
console.log("two");
console.log("three")

//Asynchronous-->

// Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.


console.log("one");
console.log("two");
console.log("three");

setTimeout(() => {
    console.log("hello")
}, 4000); //timeout;


console.log("four");
console.log("five");




//# Callbacks:

// A Callback is a function passed as an argument to another function.

function sum(a,b){
    console.log(a+b)
}

function calculator(a , b, sumCallback){
    sumCallback(a,b)
}

calculator(1,2, sum)



const hello=()=>{
    console.log("hello")
}

setTimeout(hello,4000)   // this is also a callback function
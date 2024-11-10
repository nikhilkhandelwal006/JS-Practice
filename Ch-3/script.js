//#Functions:-


//  It is simply a piece of code which we can use in our program many times.


// It is just like a variable holding some piece of code

//// Declaration:-

function nameOffFunction(){
    console.log("You are running code present inside the function")
}

// function call
nameOffFunction()




//Function Expression:-

let fun=function(){
    console.log("this is an example of function expression")
}

fun()




// Passing values (Arguments and Parameters):-

// let invitation=function(name){
//     console.log(`welcome! ${name} You are invited on our event`)
// }

// invitation("marie")
// invitation("nikhil")


// let invitation=function(name="defaultName", time="night"){
//     console.log(`welcome! ${name} You are invited on our event at ${time}`)
// }

// invitation("marie","morning")
// invitation()


// Returning Values(How to return value from the function):-

let ageCalculation=function(birthYear,currentYear=2024){
    let age=currentYear-birthYear;
    return age;
}

// console.log(ageCalculation(2000))

let functionResult=ageCalculation(2000)
console.log(`Your age is = ${functionResult}`)



 

//# Arrow function(ES6):-

//special form of function expresion
// it allows us to write function more fast beause-
// i.) No need to use function keyword
// ii.) No need to use paranthesis() in case of single parameter
//iii.) No need to curely{} if there is single line code in function
//iv.) No need to use return statement if single line code is in function


//Function  expression-->
// let invitation=function (name) {
//     console.log(`Welcome ${name} to this event`)
// }

// invitation("coders")

//Arrow Function-->
// i)// let invitation=name=> `welcome ${name} to this event`
// console.log(invitation("coders"))


// ii).
//  let invitation=name=> 
//     {return `welcome ${name} to this event`}
// console.log(invitation("coders"))



//#Passing function as an argument(Higher order function example):-

// let upperCase=function(str){
//     return str.toUpperCase()
// }

// let lowerCase=function(str){
//     return str.toLowerCase()
// }

// let transformer=function(str,fun){
//     return fun(str)
// }

// console.log(transformer("Hello Programmer",lowerCase))



// Function returning another function

let compliment=function(msg){
    return function(name){
        console.log(`${msg} ${name}`)
    }
};

// compliment("You are a good coder")("NK")   //1st method to do

// let complimented= compliment("you are a good coder")
// complimented("NK")   //2nd method to do

// compliment is a higher order function


//Immediately invoked function expression:-


// Execuated only once

(function(name){
    console.log("this function will never execuate again", name)
})("IIFE")




//#setTimeOut and setInterval:-

// setTimeout -> Run function "once" after "interval" of time

// setInterval -> run function repeatedly, starting  after the interval of time , then repeating .....


// 1. setTimeOut

// // setTimeout(fun|code, delay, arg1, arg2, ...)

// function greeting(name){
//     console.log(`Welcome ${name} to our coder dost family`)
// }

// setTimeout(greeting,5000, "Nikhil") 


// 2. setInterval

// setTimeout(fun|code, delay, arg1, arg2, ...)

function greeting(name){
    console.log(`Welcome ${name} to our coder dost family`)
}

setInterval(greeting,3000,"Nk")

//#Hoisting:-
//variable "declaration" are "hoisted" toward "top" of their scope

// test=6;
// console.log(test) //6
// var test;

// test=6;
// console.log(test)     //error
// let test;


//function Declaration

// test()   //Hello Programmers
// function test(){
//     console.log("Hello Programmers")
// }    


//Not function expression or arrow function

// test() //error
// let test=()=>{
//     console.log("hello Programmers")
// }
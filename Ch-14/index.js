// Function

// Closures


// Closure means "inner" function has an access to the variable and parameters of "outer" function even after outer function has returned.



// let outerFunction=function(){
//     let outerVariable="outer Variable";

     
//     let innerFunction=function(){
//         console.log(outerVariable)
//     }
    
//     return innerFunction

// }

// let innerFunc=outerFunction();
// innerFunc()



let outerFunction=function(outerParameter){
    let outerVariable="outer Variable";

     
    let innerFunction=function(){
        console.log(outerVariable,outerParameter)
    }
    
    return innerFunction

}

let innerFunc=outerFunction("outer Param");
innerFunc()





// Closure does not make seprate copy of outer variable.
//it just "refrence" them

// example:-

let counter=function(){
    let count=0
    let innerCounter=function(){
        return count=count+1
    }
    return innerCounter
}

let innerCount=counter()
console.log(innerCount())//1
console.log(innerCount())//2
console.log(innerCount())//3
// because its refrence them
// # Introduction to objects in Javascript:-


// let car={
//     color:"black",
//     model:"2022",
//     company:"Honda"
// }

// console.log(car)

// // Accessing the Javascript Object properties

// console.log(car["company"]); // Honda
// console.log(car.company)    //Honda


// let propertyName="color"
// console.log(car.propertyName) //undefined
// console.log(car[propertyName]) // black
// console.log(car.color) //black


// // "Modify" the object property

// car["color"]="brown";
// car.model=2024;
// console.log(car.color)  //brown
// console.log(car.model)   //2024


// // Delete properties of object


// let obj={
//     prop1:"value1",
//     prop2:"value2"
// }

// console.log(obj.prop1)   //value1

// delete obj["prop1"]
// console.log(obj.prop1)  //undefined

// let result=delete obj["prop1"]   // it always return true (means in boolean)
// console.log(obj.prop1)  //undefined
// console.log(result)//true




// # Function Vs method

// Function--
// let ageCalculate=function(birthyear){
//     let age=2023-birthyear
//     console.log(`current age is = ${age}`)
// }

// ageCalculate(2003)


// method -- it is nothing but object property(key) holding function as "value"

// let person={
//     ageCalculate: function(birthyear=2008){
//         let age=2023-birthyear;
//     //   console.log(age)
//     return age;
//     }
// }

// // person.ageCalculate(2000)

// console.log(person.ageCalculate(2004))



// this keyword:-

// In each method we have an access of special keyword called "this"

// "this" keyword represent the object. "calling" the "method" in which "this" is "present".


// example 

let person={
    firstName:"Harry",
    lastName:"Brooke",
    city:"Delhi",
    bithYear:1998,
    education:"Software engineer",
    getSummary:function(){

        // return `Harry brooke lived in delhi. He is software engineer and his birth year is 1998.`

        // return `${this.firstName} ${this.lastName} lives in ${this.city} and his birth year ${this.bithYear}`
        return this
    }

}



console.log(person.getSummary())


// Step 1 Check in which method we use "this" keyword
// Step 2 Owner of that method(who is calling those method)
 



// forEach method of array:-

// Its another type of loop which we used to traverse over the array.


let dishes=["biryani", "channy", "karhai","Bhallay"]

//using for loop

// for(let i=0;i<dishes.length;i++){
//     console.log(dishes[i])
// }

// using forEach
dishes.forEach(function(element){
    console.log(element)
})


const cities=["NY","LA","TX"];
const lowerCased=[];

cities.forEach((city)=>lowerCased.push(city))
console.log(lowerCased)

//Objects inside array:-

// let blockList=[{userName:"John",reason:"Abusive content"},
//     {userName:"paul",reason:"copyright issues"}
// ]

// console.log(blockList);


// for(let i=0;i<blockList.length;i++){
//     console.log(`User ${blockList[i].userName} blocked due to ${blockList[i].reason}`)  
//  }                                      



 //Math Object Built in object in javascript:-

//  console.log(Math)


// let number=9.6;
// console.log(Math.round(number)) //round to nearest integer  //10

// let number=9.2;
// console.log(Math.floor(number)) //round to down    //9

// let number=9.9;
// console.log(Math.ceil(number)) //round to up  //10

// Math.abs(-2)  //2 

// let number=9.6;
// console.log(Math.trunc(number)) //round decimal part  //9

// let random=Math.random()
// console.log(random)
// console.log(Math.round(random*100))   //1-100




//Function:-

//#call and apply method:-
//we can manually set the value of "this" keyword using 

"use strict"
let mainPlane={
    airline:"Fly India",
    latacode:"FI",
    bookings:[],
    book:function(flightNum,name){
        console.log(`${name} Booked Filght on ${this.airline} with flight Number ${this.latacode}${flightNum}`)
        this.bookings.push({flightName:`${this.airline}`, name:`${name}`, flightNum:`${flightNum}`})
    }
}


mainPlane.book(545,"Nikhil khandelwal")//Nikhil khandelwal Booked Filght on Fly India with flight Number FI545
mainPlane.book(500,"Jack")

// console.log(mainPlane)


let childPlain={
    airline:"child Plain",
    latacode:"CP",
    bookings:[]
}

let book=mainPlane.book;

// book(665,"khandelwal")  //error (because of "this" keyword which is undefined outside the function)

// call method
book.call(childPlain,777,"renu")//renu booked flight on child plain with flight number CP777


// console.log(childPlain)

book.call(mainPlane,1000,"raj")// raj booked flight on fly india with flight number FI1000

// (upr wali line:214 use krne ka koi mtlb nii tha kyuki usme function tha book naame ka already)

console.log(mainPlane)


// apply method
book.apply(childPlain,[778,"rn"])// rn booked flight on child plain with flight number CP778
console.log(childPlain)

// (call and apply same se he hai call m sidhe arguments de skte ho comma(,) lgake and apply m bracket bnake array ki trh)




//# bind method:-

function greet(){
    console.log(`Welcome ${this.firstName} ${this.lastName} on coder dost `)
}

let user={
    firstName:"Neha",
    lastName:"singh"
}

let greets=greet.bind(user)
greets()// welcome neha singh on coder dost


//# "object/arrays" how "refrence" are passed to variable

//pass by refrence

// let arr=[1,2,3,4,5];

// let getRef=arr;

// getRef[6]=7;
// getRef.shift()   // shift used to remove first element in an array

// console.log("original array", arr)//will also change//  [2,3,4,5,empty,7]
// console.log("getRef",getRef)// [2,3,4,5,empty,7]


// pass  by value

let arr=[1,2,3,4,5];
let getValue=[...arr];

getValue[6]=8

console.log("original array",arr)// will not change//[1,2,3,4,5]
console.log("getValue array", getValue)//[1,2,3,4,5,empty,8]


//#for-in loop :-

let car={
    model:2023,
    color:"Black",
    company:"Toyota"
}
console.log(car)

// for(let key in car){
//     console.log(key)
// }


// for (let key in car){
//     console.log(`${key}: ${car[key]}`)
// }



let x=""
for(let key in car){
        x=x+car[key]
        
    }
    console.log(x) //2023BlackToyata

    // (object m iterate krna ho toh tb for-in kaam aata h )
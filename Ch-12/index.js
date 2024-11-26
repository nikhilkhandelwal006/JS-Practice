// Array De-structuring:-

// let hotel={
//     name:"hottell",
//     location:"Street No xyz Delhi",
//     categories:["Chinese","Italian","English"]
// }


// Example 1:
// Without destructuring-

// let items=[2,3,5,6]
// let x=items[0]
// let y=items[1]
// let z=items[2]
// let p=items[3]
// console.log(x,y,z,p)


// With Destructuring

// let [x,y,z,p]= items

// console.log(x,y,z,p)



// Example 2:

// let [main, ,secondary]=hotel.categories
// console.log(main,secondary);



// Switch the category(Usecase)-->

// Without destructuring

// let temp=main;
// main=secondary;
// secondary=temp;

// console.log(main,secondary)


// With destructuring

// [secondary,main]= [main,secondary]

// console.log(main,secondary)   // this will swap without the need of third element






// Destructuring of nested arrays-->


// let nums=[2,3,[6,9]];
// // let [a, ,b]=nums
// // console.log(a,b) // 2 [6,9]



// let [a, ,[b,c]]=nums
// console.log(a,b,c);  // 2 6 9






// # Object De-structuring:-


// let hotel={
//     name:"hotell",
//     Location:"street No xyz Delhi",
//     categories:["Chinese","Italian","English"],
//     mainMenu:["FoodA","FoodB","FoodC"],
//     openingHours:{
//         sunday:{open:"09:00AM", close:"11:00PM"},
//         monday:{open:"10:00AM", close:"10:00PM"}
//     }
// }

// let {name,Location,mainMenu}=hotel;
// console.log(name,Location,mainMenu);




//Set customize name to Object property-->

// let {name:hotelName,Location:hotelLocation,mainMenu:Menu}=hotel

// console.log(hotelName,hotelLocation,Menu)




// Setting Default Values-->

// let {name,Menu=[],categories=[]}=hotel;
// console.log(name,Menu,categories) // hotell, [], ['Chinese','Italian', 'English']


// let {name,Menu:newMenu=[],categories=[]}=hotel;
// console.log(name,newMenu,categories) // hotell, [], ['Chinese','Italian', 'English']



// Destructuring Nested Objects-->

// let {name,openingHours}=hotel;
// console.log(name,openingHours)

// let {sunday}=openingHours
// console.log(sunday) // {open: '09:00AM', close: '11:00PM'}

// let {sunday:{open,close}}=openingHours
// console.log(open,close) // 09:00AM  11:00PM






//# Spread Operator(Unpacking of array elements):-


// let hotel={
//     name:"hotell",
//     Location:"street No xyz Delhi",
//     categories:["Chinese","Italian","English"],
//     mainMenu:["FoodA","FoodB","FoodC"],
//     openingHours:{
//         sunday:{open:"09:00AM", close:"11:00PM"},
//         monday:{open:"10:00AM", close:"10:00PM"}
//     }
// }



// let nums=[2,3,5,7]
// console.log(nums)//[2, 3, 5, 7]
// console.log(...nums)//2 3 5 7


// //usecase

// let newArray=[9,10, ...nums]
// console.log(newArray)

// let updatedMainMenu=[...hotel.mainMenu, "FoodD","FoodE"]
// console.log(updatedMainMenu)


// // Join 2 Arrays-->

// let joinedArray=[...nums, ...newArray]
// console.log(joinedArray)//[2, 3, 5, 7, 9, 10, 2, 3, 5, 7]


// // Create shallow copy using spread operator-->

// // let copyArray=[...updatedMainMenu]
// // copyArray[1]="updatedFood"
// // console.log(copyArray)
// // console.log(updatedMainMenu)


// // Deep copy

// let copyArray=updatedMainMenu //reference
// copyArray[1]="new Food"
// console.log(copyArray)
// console.log(updatedMainMenu) // this will also change.



// // we can also use spread operator on strings-->

// let passion="Programming";
// console.log(...passion)





// # Rest pattern and parameter:-

// let hotel={
//     name:"hotell",
//     Location:"street No xyz Delhi",
//     categories:["Chinese","Italian","English"],
//     mainMenu:["FoodA","FoodB","FoodC"],
//     openingHours:{
//         sunday:{open:"09:00AM", close:"11:00PM"},
//         monday:{open:"10:00AM", close:"10:00PM"},
//         tuesday:{open:"06:00AM", close:"10:00PM"}
//     }
// }


// Spread(...) operator it is present in the RHS of-->

// let nums=[2,3,4,5,6]
// let newArray=[1, ...nums]
// console.log(newArray)



// Syntax of REST(...) Get elements and packed them into array -->
// Use in LHS

// let [a,b,...others]=nums;
// console.log(others)



// Objects

// let {sunday, ...weekdays}=hotel.openingHours;
// console.log(sunday, weekdays)


//# Short circuiting (&&, ||):-



// falsy Values => 0,false,null,undefined,""(empty string)

// AND (&&) operator (output true if all input true)-->

// let result=5000 && "Coders"
// console.log(result) //Coders // last value comes

// let result=null && "Coders"
// console.log(result) //null // will not move to next operand


// let result=0 && null
// console.log(result) //0 // will not move to next operand


// let result="programmers" && "" &&"5"
// console.log(result)  



// let result="programmers" && 0 &&"5"
// console.log(result)   //0




// OR (||) operator (Output true if any given input true)

// let result="Programmer" || "coders"
// console.log(result)

// As || operator find first output true.Its simply return that true value and does not move towards next operands.


// let result="" || "coders"
// console.log(result) //coders


// let result="" || null
// console.log(result) 




//# Nullish coalescing Operator:-
 
// For nullish coalescing operator(??) only "null" and "undefined" are falsy value.

// let numGuests=null;
// let result=numGuests||10
// console.log(result) //10


// let result2=numGuests??10
// console.log(result) //10



// let numGuests=0;
// let result=numGuests||10
// console.log(result) //10


// let result2=numGuests??10
// console.log(result) //0 //0 is not nullish value



 
//# for-of Loop:-

// let hotel={
//     name:"hotell",
//     Location:"street No xyz Delhi",
//     categories:["Chinese","Italian","English"],
//     mainMenu:["FoodA","FoodB","FoodC"],
//     starterMenu:["SpecialFoodA","SpecialFoodB"],
//     openingHours:{
//         sunday:{open:"09:00AM", close:"11:00PM"},
//         monday:{open:"10:00AM", close:"10:00PM"},
//         tuesday:{open:"06:00AM", close:"10:00PM"}
//     }
// }



// let menu=[...hotel.mainMenu, ...hotel.starterMenu]
// console.log(menu)

//  for(let elem of menu) console.log(elem)
//  FoodA
//  FoodB
//  FoodC
// SpecialFoodA
//  SpecialFoodB



// if we want both index as well as value
//  for(let [i,item] of menu.entries()){
//     console.log(`${i+1}: ${item}`)
//  }   




//# Enhanced Object literal:-
// Before ES6 Vs After ES6

// we can use computed property name

//  let openingHours={
//     sunday:{open:"09:00AM", close:"11:00PM"},
//     monday:{open:"10:00AM", close:"10:00PM"},
//     tuesday:{open:"06:00AM", close:"10:00PM"}
// }

// let menuType="platinumMenu"

// let hotel={
//     name:"hotell",
//     Location:"street No xyz Delhi",
//     categories:["Chinese","Italian","English"],
//     mainMenu:["FoodA","FoodB","FoodC"],
//     starterMenu:["SpecialFoodA","SpecialFoodB"],
//     openingHours,
//     // order:function(){

//     // }
//     order(){
        
//     },
//     // menuType:["Different food items..."],
//     [menuType]:["Different food items..."]
  
    
// }

// console.log(hotel)






// # optional Chaining(?.):-


//  let openingHours={
//     sunday:{open:"09:00AM", close:"11:00PM"},
//     monday:{open:"10:00AM", close:"10:00PM"},
//     tuesday:{open:"06:00AM", close:"10:00PM"}
// }

// let menuType="platinumMenu"

// let hotel={
//     name:"hotell",
//     Location:"street No xyz Delhi",
//     categories:["Chinese","Italian","English"],
//     mainMenu:["FoodA","FoodB","FoodC"],
//     starterMenu:["SpecialFoodA","SpecialFoodB"],
//     openingHours

// }

// Let suppose we Want to check this hotel open on saturday or not
// if open then at what time.

// console.log(hotel.openingHours.saturday) //undefined

// console.log(hotel.openingHours.saturday.open) //error



// to avoid this error there are 2 methods:

// without optional chaining

// if(hotel.openingHours && hotel.openingHours.sunday){
//     console.log(hotel.openingHours.sunday.open)
// } //09:00AM


// with optional Chaining

// console.log(hotel.openingHours?.saturday?.open) // undefined



// console.log(hotel.openingHours?.sunday?.open) // undefined

//check previous value of the operator(?.) and returns you => null or undefined. (This operator will not give you error )






//# Looping Objects (Object_Keys,values,entries):-



let openingHours={
    sunday:{open:"09:00AM", close:"11:00PM"},
    monday:{open:"10:00AM", close:"10:00PM"},
    tuesday:{open:"06:00AM", close:"10:00PM"}
}


let hotel={
    name:"hotell",
    Location:"street No xyz Delhi",
    categories:["Chinese","Italian","English"],
    mainMenu:["FoodA","FoodB","FoodC"],
    starterMenu:["SpecialFoodA","SpecialFoodB"],
    openingHours

}


//Keys(Properties)

// let properties=Object.keys(hotel)
// console.log(properties)

// for (let key of properties){
//     console.log(key)
// }


// Values

// let values=Object.values(hotel)
// console.log(values)

// for (let key of values){
//     console.log(key)
// }


// Complete Object

let entries=Object.entries(openingHours)
console.log(entries)

// for(let key of entries){
//     console.log(key)
// }

for(let [day,{open,close}] of entries){
    console.log(`On ${day} we open at ${open} and close at ${close}`)
}








// # Sets:-

// let itemSet=new Set([1,2,3,1,4,5,6,5])
// console.log(itemSet) //[1,2,3,4,5,6]
// console.log(itemSet.size) //6
// console.log(itemSet.has(2))//true
// console.log(itemSet.has(8))//false
// console.log(itemSet.add(9))
// console.log(itemSet.delete(2))
// console.log(itemSet)
// console.log(itemSet[0]) //undefined // not allowed

// Set are also iterables-
// for(let item of itemSet){
//     console.log(item)
// }




// let itemSet=new Set("programmers")
// console.log(itemSet)
// for(let item of itemSet){
//     console.log(item) 
// } 
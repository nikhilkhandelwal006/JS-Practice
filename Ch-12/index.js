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

let hotel={
    name:"hotell",
    Location:"street No xyz Delhi",
    categories:["Chinese","Italian","English"],
    mainMenu:["FoodA","FoodB","FoodC"],
    openingHours:{
        sunday:{open:"09:00AM", close:"11:00PM"},
        monday:{open:"10:00AM", close:"10:00PM"},
        tuesday:{open:"06:00AM", close:"10:00PM"}
    }
}


// Spread(...) operator it is present in the RHS of-

let nums=[2,3,4,5,6]
let newArray=[1, ...nums]
console.log(newArray)



// Syntax of REST(...) Get elements and packed them into array --
// Use in LHS

let [a,b,...others]=nums;
console.log(others)



// Objects

let {sunday, ...weekdays}=hotel.openingHours;
console.log(sunday, weekdays)
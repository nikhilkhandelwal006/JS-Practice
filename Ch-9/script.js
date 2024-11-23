//# Local Storage:-

// In Previous todo list task, when we refresh the browser we lose our current state data

// Store and retrieve data from database

// For now our focus is on local storage

// Store and retrieve data from local storage

// Is an api provided by browser to store data inside browser


// console.log(window)

// console.log(localStorage)


//Set the Item in local storage-->

// localStorage.setItem('passion',"programming")
// localStorage.setItem('age',24)
// console.log(localStorage)


//Get the Item from local storage-->

// console.log(localStorage.getItem('passion')) //programming
// console.log(localStorage.getItem('age'))//24


// Update the Item from local storage-->

// localStorage.setItem("age",26) // overwrite the previous value
// localStorage.setItem("passion","coding")
// console.log(localStorage)


// Remove the item from local storage-->

// localStorage.removeItem("age")
// localStorage.removeItem("passion")
// console.log(localStorage)



//Q. How to store complex data structure like array of objects?

// Ans.
//  Ultimately in local storage data store in string formats


let vehicles=[
    {company:"Honda",model:"2009"},
    {company:"Toyota",model:"2010"}
]

console.log(vehicles)
console.log(typeof vehicles) //object

let stringOfVehicles=JSON.stringify(vehicles)
console.log(stringOfVehicles)
console.log(typeof stringOfVehicles) //string


localStorage.setItem("vehicles", stringOfVehicles)
console.log(localStorage)


let storedData=localStorage.getItem("vehicles")
console.log(storedData)//[{"company":"Honda","model":"2009"},{"company":"Toyota","model":"2010"}]
let objectFormats=JSON.parse(storedData)
console.log(objectFormats)
console.log(typeof objectFormats) //object
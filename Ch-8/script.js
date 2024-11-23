// Date and Time

//# Date Object always Carry Both "Date" And "Time"

// Using Date method-->
// let currentDate= new Date(15,7,2); // 0 to 11(Month)
// console.log(currentDate)


// let currentDate= new Date(2015,7,12,11); // 0 to 11(Month)
// console.log(currentDate)


// Using timeStamp-->(integer number represent in "ms" from 1-1-1970)

// let currentDate=new Date(86400000); //0 is time in ms
// console.log(currentDate)
// 1 day=24*60*60*1000=86400000ms


// To get time in "ms"-->

// let currentDate=new Date().getTime()
// console.log(currentDate)//1732355781663 total time in ms




// Get Full Year-->

// let completeDateAndTime=new Date()
// console.log(completeDateAndTime)

// console.log(completeDateAndTime.getFullYear())



// let completeDateAndTime=new Date(2020,9,21)
// console.log(completeDateAndTime)

// console.log(completeDateAndTime.getFullYear())//2020


// Get Month-->

// let completeDateAndTime=new Date()
// console.log(completeDateAndTime)
// console.log(completeDateAndTime.getMonth())
//month is always  0 to 11, 0-January 11-December


// get week day-->

// let completeDateAndTime=new Date()
// console.log(completeDateAndTime)
// console.log(completeDateAndTime.getDay())
// 0- sunday , 1-Monday and so on


// get Date-->

// let completeDateAndTime=new Date()
// console.log(completeDateAndTime)
// console.log(completeDateAndTime.getDate())


// get Hours-->
// let completeDateAndTime=new Date()
// console.log(completeDateAndTime)
// console.log(completeDateAndTime.getHours())


// get Minutes-->
// let completeDateAndTime=new Date()
// console.log(completeDateAndTime)
// console.log(completeDateAndTime.getMinutes())


// get seconds-->
// let completeDateAndTime=new Date()
// console.log(completeDateAndTime)
// console.log(completeDateAndTime.getSeconds())

//get MilliSeconds-->

// let completeDateAndTime=new Date()
// console.log(completeDateAndTime)
// console.log(completeDateAndTime.getMilliseconds())
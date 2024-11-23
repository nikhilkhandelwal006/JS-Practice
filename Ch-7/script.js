//# Working with Arrays(Simple Methods):-

// let letters=["a","b","c","d"]

// //Reverse (Mutate the original array)-->

// let reverse=letters.reverse()

// console.log(reverse)
// console.log(letters)



// // concat-->

// let nums=[1,2,3,4];

// let concated=nums.concat(letters)
// console.log(concated)
// console.log(nums)


// //Join-->

// let joined=letters.join('-')
// console.log(joined) // d-c-b-a
// // this will convert into string also 




// Slice Methods-->

// use to extract part of array
// Array.slice(startINdex,lastIndex(excluded))
//Return new array of extracted elements


// let num=[3,4,5,7,8,76]
// // let extractedArray=num.slice(1,4)
// // let extractedArray=num.slice(1) //1-till the end
// let extractedArray=num.slice(-5)
// console.log(num)
// console.log(extractedArray)



//Splice method-->

// Array.splice(index,deleteValue,valueToBeAdded)
// return deleted items in the form of array

// let num=[3,5,7,9,2]
// let updated=num.splice(1,1,1)
// console.log(num)//[3,1,7,9,2]it also mutate the original array.
// console.log(updated) //5



// let num=[3,5,7,9,2]
// let updated=num.splice(1,2,1)
// console.log(num)//[3,1,9,2] // it also mutate the original array.
// console.log(updated) //[5,7]



// let num=[3,5,7,9,2]
// let updated=num.splice(1,0,1,4)
// console.log(num)//[3,1,4,5,7,9,2] // it also mutate the original array.
// console.log(updated) //[]



//at method-->

// let nums=[23,54,77,84];

// console.log(nums[0])
// console.log(nums[-1])//undefined


// console.log(nums[nums.length-1])
// console.log(nums.at(1))//54
// console.log(nums.at(-2))//77

//Note:- at method can also work on strings

// let name="Nikhil"
// console.log(name.at(-2)) //i
// console.log(name.at(-3)) //h
// console.log(name[2])//k
// console.log(name.at(2))//k



//Map method-->

//create new array from original array by applying
// transformation function

// let salaries=[3000,5000,8000,6000,9000]

// let newSalaries=salaries.map(salary=>{
//     let incrementedAmount=salary/2
//     return salary+incrementedAmount
// })

// console.log(newSalaries)//[4500,7500,12000,6000,9000]
// console.log(salaries)//[3000,5000,8000,6000,9000]

//length of new array always equal to the original array




//Filter Method (Used to perfom filteration on array)-->

// let gifts=["Watch","Ring","Chocolates","Teddy-Bear","Watch","Ring"]

// let filteredArray=gifts.filter(gift=>{
//     if(gift=="Watch"||gift=="Ring"){
//         return gift
//     }
// })

// console.log(filteredArray)// it return new array
// console.log(gifts)

//Imp Note
// Length of new array may or may not be equal to original array.



//Reduce Methods-->

//Run reducer function for each array element
// Array.reducer(function(total,currentValue),intitalValue)
//it return single value


// Sum of all elements using reduce method

// let num=[1,5,8,2,9];

// let sum=num.reduce(function(total,currentValue){
//     return total+currentValue
// },9)
// console.log(sum)

// // Does not mutate original array

// console.log(num)



// Find Method-->

// it  return the "first" element we are looking for...

// let students=[{id:1,name:"alex"},{id:2,name:"john"}];

// let result=students.find(student=>{
//     return student.id===1
// })

// console.log(result)

//Note:- agr isme id=1 krke do object hote, toh phle wala object aata.
// 

// findIndex Method -->

// Execuate function for each array element
//  it return "index" of that array element who first pass the test "otherwise" -1


// let students=[{id:1,name:"alex"},{id:2,name:"john"},{id:3,name:"nk"}];

// let result=students.findIndex(student=>{
//     return student.id===3
// })

// console.log(result)//2


// "some" and "every" method-->

//some method return "true" if "any" array element pass the test

// every method return "true" if "all" elements pass the test

// let scores=[25,34,67,65,80,92]

// let result=scores.some(score=>{
//     return score>90
// })
// console.log("some method",result)




// let newScores=[25,34,67,65,80,92]

// let newResult=newScores.every(newScore=>{
//     return newScore>90
// })
// console.log("some method",newResult)



// "flat" method-->

// it creates a new array with the elements of the subarrays "concatenated" into it.

// let arr=[1,2,3,[4,5,6]];

// console.log(arr)
// // [ 1, 2, 3, [ 4, 5, 6 ] ]
// console.log(arr.flat()) // by default 1(dept value) value //[ 1, 2, 3, 4, 5, 6 ]
// console.log(arr)
// // [ 1, 2, 3, [ 4, 5, 6 ] ]


// let arr=[1,2,3,[4,[5,[6]],9]];

// console.log(arr)
// console.log(arr.flat(3)) //[1,2,3,4,5,6,9]



// "flatMap" method

// it is the combination of the "map()" method
// follwed by the "flat()" method of depth "1".


// let cart=[{
//     name:"Mobile Phone",
//     qty:2,
//     price:500
// },
// {
//     name:"Tablet",
//     qty:1,
//     price:1000
// }]

// let newCart=cart.flatMap(item=>{
//     if(item.name==="Mobile Phone"){
//         return [item,{
//             name:"screen Protector",
//             qty:1,
//             price:0
//         }]
//     }else{
//         return[item]
//     }
// })

// console.log(newCart)
// [
//     { name: 'Mobile Phone', qty: 2, price: 500 },
//     { name: 'screen Protector', qty: 1, price: 0 },
//     { name: 'Tablet', qty: 1, price: 1000 }
//   ]




//Sorting array using sort method-->

//By default sort method is used to sort strings
// it firstly convert everything into string and then....

// let letters=["a","f","s",'g','d',"k"]
// console.log(letters.sort())

// let nums=[2,5,7,-1,-22,-43]
// console.log("unnsorted",nums)


// if a-b <0 => a<b => A,B(keep order same)

// if a-b >0 => a>b => B,A  (Switch the order)

// Ascending
// nums.sort((a,b)=>{
//     if(a<b){
//         return -1 //Any Num less than 0
//     }
//     if(a>b){
//         return 1 //Any Num greater than 0
//     }
// })

// console.log("sorted",nums) //ascending



// descending
// nums.sort((a,b)=>{
//     if(a<b){
//         return -1 //Any Num less than 0
//     }
//     if(a>b){
//         return 1 //Any Num greater than 0
//     }
// })

// console.log("sorted",nums) //descending




// Chain of Methods

// let num=[1,2,3,4,5,6]

// let result=num.slice(0,3).splice(2,1,7)

// console.log(result,num)//[3] [1,2,3,4,5,6]

// //slice mutating nii h but splice h 



let num=[1,2,3,4,5,6]

let result=num.slice(0,3).splice(2,1,7).push(8)
//push method return new length of the array
console.log(result)//2


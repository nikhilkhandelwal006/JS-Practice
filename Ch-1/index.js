//# Variables, Constants And comments:-

// var score=23;
// var score=56; //Redeclare
// console.log(score)

// let points=23;
// // let points=33; //cannot redeclare
// points=33;  // can re-assign
// console.log(points)

// // Constants

// const value=18;
// // const value=22;// cannot redeclare
// // value=88;  //cannot re-assign
// console.log(value)
 


//# Data Types of values:-

//  there are 7 Data types :--

// 1. Numbers - 1,2,44,56,7443,64,32,2,1

// 2. String  - "I am String", "34", 'Also String'

// 3.Boolean-  true/False


//4. Null-
//Null Intentionally absence of value

// let score=null; --> null
// score=11;
// console.log(score)

// 5. Undefined-

//Undefined Variable declared but not initialised

// let points; --> undefined
// points=99
// console.log(points)


// 6. //Object Complex data structure

//7. // Symbol - looks like object





//#Strings:-
console.log("Hello Coders")
let firstName="Wow";
let lastName="Programmer"
// console.log(firstName, lastName)


//String Concatination:-

// Method 1 Using + operator

// let fullName= firstName +" "+ lastName
// console.log(fullName)

// Method 2 Using Template literals

// let fullName= `I want to Become ${firstName} ${lastName}`
// console.log(fullName)

// Getting String Character:-
console.log(firstName[2])

// String Methods:-

console.log(firstName.toUpperCase())
console.log(lastName.toLowerCase())
console.log(lastName.indexOf("g"))

 

// Common Strings Methods

// let hobbies= 'coding reading running';
// console.log(hobbies)

// let hobbies= '     coding reading running    ';
// // trim method
// let result=hobbies.trim()
// console.log(hobbies)
// console.log(result)

// indexOf

// console.log(result.indexOf("coding"))  //0
// console.log(result.indexOf("running")) //15
// console.log(result.lastIndexOf("g")) //21
// console.log(result.indexOf("Running")) //case sensitive


// includes method

// console.log(result.includes("reading"))// true
// console.log(result.includes("Reading"))// false


//slice method:-

// let fullName= "wowprogrammer"

// console.log(fullName.slice(0,8)) // Excluding last one 0,7

// let result=fullName.slice(0,4) //0-3
// console.log("Original String =",fullName)
// console.log("Extracted String=" ,result)
// // IMP NOTE:- does not mutate original array.



// String "split" method :-

// let favoriteColors= "Brown Blue Black Gray"

// let arrColors= favoriteColors.split(" ");
// //string to array

// console.log(arrColors)


let favoriteColors= "Brown,Blue,Black,Gray"

let arrColors= favoriteColors.split(",");
//string to array

console.log(arrColors)


// Javascript string are immutable

// let str= "Hello";

// str[0]= "p";

// str[1]= "q";

// i.//There will be no change in "str" variable;
// ii.//Strings are immutable
// console.log(str)



// let str= "Hello";

// str= str + "Programmers";

// console.log(str)
 


//#Numbers :-


// let score =50;
// console.log(score, typeof(score));  // 50  'number'


// Mathematical Operators + / % ** + -

// let result= score /2; //Give Quotient //25
// let result= score%2;  //Give Remainder //0
// console.log(result)

// Mathematical Expression 

// let result =score *2 + (4*3) - 8 /2 %4;
   // Using prirority and procedure
   // 1 () Brackets
   // 2 ** Power Operator
   // 3 * / % (From left to Right)
   // 4 +  - (From left to Right)

//    console.log(result)

// Concatination of Numbers

// let resultLine= "My Total Score is =" + result;
// console.log(resultLine)
// console.log(typeof(resultLine))






// Loose Equality (==) vs Strict Equality Operator (===):-

// Loose Equality Operator ==

// let age=22; //Number type value
// console.log(age == "22") //Focus Only on value But Not type  // True

// console.log(age != "22") //False

// // Strict Equality Operator ===

// console.log(age === "22") //Focus on Both value and its type  //False

// console.log(age !== "22") //True




//Type Conversion:-

// let stringtype = "12";

// console.log(stringtype, typeof stringtype) // 12 string

// // Number Method

// let numberType= Number(stringtype)
// console.log(numberType , typeof numberType) //12 number

// Imp. Note-- IN number method passing string must be of numeric values


// let numberType=54;
// console.log( numberType ,typeof numberType)

// //String Method

// let stringType= String(numberType)
// console.log(stringType, typeof stringType)


// Koi bhi number ko string bnaya ja skta h but har string ko number niii bnaya ja skta.


//#Boolean method  :-
// let age=22;
// let age="";
let age="32";
let BooleanValueOfAge = Boolean(age)


console.log("Boolean Value of age is", BooleanValueOfAge)





//# Arrays :-

let dishes= ["Biryani", "Chat", "Paranthay"]

//Access
console.log(dishes[1])
console.log(dishes[0])


//Modify the array
dishes[0] = "kadhai"
console.log(dishes)

//Array Methods

//Join Method

console.log(dishes.join(" "))
console.log(dishes.join("-"))
console.log(dishes.join(""))

//indexOf
console.log(dishes.indexOf("chat"))  //case senditive //-1
console.log(dishes.indexOf("Chat"))  //1


//concat method

let newDishes=["sweet-dish", "Pani-poray"];
console.log(dishes.concat(newDishes))  //['kadhai', 'Chat', 'Paranthay', 'sweet-dish', 'Pani-poray'] 
console.log(newDishes.concat(dishes))  //['sweet-dish', 'Pani-poray', 'kadhai', 'Chat', 'Paranthay']

let updatedDishes=dishes.concat(newDishes)

// Length method

console.log(dishes.length) //3
console.log(newDishes.length) //2
console.log(updatedDishes.length)  //5


//push method
console.log(updatedDishes.push("Bhallay")) //6
console.log(updatedDishes)

//pop method
 console.log(dishes.pop())
 console.log(updatedDishes.pop())



 //#Boolean Values and comparison Operators:-

 let booleanType = true;
 let stringType ="true";

 console.log(typeof booleanType, typeof stringType) // boolean string

 // Methods Return Boolean Values

 let email = "wowcoder@example.com";

//  let booleanValue = email.includes("@")
//  console.log(booleanValue)// true

  let booleanValue = email.includes("E")
 console.log(booleanValue)// false


 // Comparison Operators Always Return Boolean Value
 // == , === , !== , !=
 // > , >=
 // < , <=

 let points =23
 console.log(points == "23") //true
 console.log(points === "23") // false
 console.log(points !== 234) // true
 console.log(points <= 10) //false  //les than equal
 console.log(points >= 23) //true  //greater than equal
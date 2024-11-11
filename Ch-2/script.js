//# For-loop:-

// for(let i=1;i<=10;i++){
//     console.log("run the test",i)
// }

// //usecase of for loop
// let dishes=["Biryani", "Chana-chat", "Bhallay","soda"]

// for(let i=0;i<dishes.length;i++){
//     console.log(dishes[i])
// }

//iteration and value of 1
// 0,1,2,3,and so on

//# While loop:-

// let j=1
// while(j<=5){
//     console.log("while loop",j)
//     j++;
// }

// let dishes=["Biryani", "Chana-chat", "Bhallay","soda"]

// let j=0;
// while(j<dishes.length){
//     console.log("Fav. dishes -",dishes[j])
//     j++
// }

//# Do-While:-

// let j=1
// do{
//     console.log("at least run time=",j)
//     j++;
// }while(j<=1) //conditon false already

//-- ek bar toh chalta he h do-while m  //

//# if , else , else if statements:-

// let budget=6500;

// if(budget>6000){
//     console.log("will do dinner in 5 star hotel")
// }else if(budget> 4500){
//     console.log("will do dinner in 3 star hotel")
// }else if(budget>3000){
//     console.log("will do dinner in 2 star hotel")
// }else{
//     console.log("run if all conditions false")
// }
// //After 1st condition trul controll get out of the scope
// console.log("Iam outside of conditional block")

//#nested-if statements:-

// let num=23;

// if(num>22){
//     console.log("Run if 1st condition true");
//     if(num>=25){
//         console.log("run if both condition are true")
//     }
//     if(num>20){
//         console.log("run if all conditions are true")
//     }
// }
//Run if 1st condition true
// run if all conditions are true

//#Break And Continue Statement:-

// Also called Jump Statements

//1.Continue statement:
//used to skip some values of loop.

// for(let i=1;i<=10;i++){
//     if( i == 5){
//         continue; //Move towards the next iteration
//     }
//     console.log("value of i = ",i)
// }

// 2. Break statement

// used to terminate the loop and controll transfer from outside

// for(let i=1;i<=10;i++){

//     if(i==6){
//         console.log("our desired values is =",i)
//         break;
//     }
//     console.log("value of i  =",i)
// }

// console.log("Now I am Outside of the loop scope")

// output:-
//value of i  = 1
//  value of i  = 2
//  value of i  = 3
// value of i  = 4
//  value of i  = 5
// our desired values is = 6

// Logical Operators

//And &&, OR ||, NOT !

// Example

// let password ="qwerty@";

// if(password.length > 5 && password.includes('@')){
//     console.log("password strength is strong")
// }else{
//     console.log("Change your password")
// }

// let password ="qwerty";

// if(password.length > 8 || password.includes('@')){
//     console.log("password strength is strong")
// }else{
//     console.log("Change your password")
// }

//Not Operator ! true to false and false to true

// let status=false;
// if(!status){
//     console.log("Your status is =",status)
// }
//output :- your status is false.

//Priorities
//Not
// And, OR from left to right

// Example :

let result = (true && true) || (false && !false);
// result= true&&true || false && true
// result= true ||  false&& true
// result=true && true
console.log(result);

//# Variables and Block scope

// scope >>- Area where variable is defined or accessible

let score = 90; //Global scope

if (true) {
  score = 60; //Block scope
  //  score;
  console.log(score); // Nearest score
}

//#ternary operator:-

// let age=20;

// if(age>18){
// console.log("Qualify")
// }else{
//     console.log("fail")
// }

//Single line solution

// Ex-1// let age=10;
// let result1= age>18?"qualify":"Fail"
// console.log(result1)

// Ex-2// let age=19;
// let weight=50;

// let result1= age>18? weight>55 ?"qualify":"weight issue": "age issue"

// console.log(result1)

// # Switch statement:-

let age = 18;

switch (age) {
  case 15:
  case 16:
  case 18:
    result = "These ages are allowed to sit in the exam";
    break;
  default:
    result = "Not allowed";
}

console.log(result);

// Object Oriented Programming

// 1.// Constructor function and the "new" Operator

// We can not use "arrow" function as constructor

// Call "constructor" function using "new" keyword

// 1 new {object} Created empty intially
// 2 "this" = {object}
// 3 object linked to prototype
// 4 function automatically return {object}


// let Car= function(color,model){


// // instance properties
// this.color=color;
// this.model=model;

// // Not a good practice
// this.login=function(){
//     console.log("login method")
// }

// }

// let instanceOfCar=new Car("Black",2024);
// let instance=new Car("Blue",2000);
// console.log(instanceOfCar,instance);
// console.log(instance instanceof Car)




























// ******************************************
// #### EXPLAINATION FROM CHAT-GPT #####
// *******************************************

// ### Imagine this:
// You’re a **toy car maker**. Every time someone wants a new toy car, you ask them what **color** and **model** they want. Then, you make the car exactly how they asked. This process is what your code is doing!

// ---

// ### Your Code Explained:
// #### 1. **What’s a Constructor?**
// A **constructor** is like a **blueprint** or **recipe** for making something. In your code, the constructor is this part:

// ```javascript
// let Car = function(color, model) {
//     this.color = color;
//     this.model = model;
// };
// ```

// - **`Car`** is your blueprint.
// - **`color` and `model`** are like the ingredients you use to make the car.
// - **`this`** is the car you’re currently building.
//   - `this.color = color` says, "Put this color on the car."
//   - `this.model = model` says, "Set the model number for the car."

// ---

// #### 2. **Making Cars (Instances):**
// When you use the `new` keyword, it’s like saying, "Hey, make me a car using this blueprint!"

// ```javascript
// let instanceOfCar = new Car("Black", 2024);
// let instance = new Car("Blue", 2000);
// ```

// - `new Car("Black", 2024)`:
//   - **Color:** Black
//   - **Model:** 2024
//   - This makes a toy car with those details and saves it as `instanceOfCar`.

// - `new Car("Blue", 2000)`:
//   - **Color:** Blue
//   - **Model:** 2000
//   - This makes another toy car and saves it as `instance`.

// These are called **instances** of `Car` because they’re specific versions of the blueprint.

// ---

// #### 3. **What Does `console.log` Do?**
// This is like showing your cars to everyone:

// ```javascript
// console.log(instanceOfCar, instance);
// ```

// It prints both cars, like:

// ```
// Car { color: 'Black', model: 2024 } Car { color: 'Blue', model: 2000 }
// ```

// This shows that you’ve made two cars, one Black and one Blue.

// ---

// #### 4. **What Does `instanceof` Do?**
// This is like asking, "Did I really use the toy car blueprint to make this car?"

// ```javascript
// console.log(instance instanceof Car);
// ```

// - It checks if `instance` was made using the `Car` blueprint.
// - If yes, it says `true`. If not, it says `false`.

// Here, it prints:

// ```
// true
// ```

// That means the `instance` is a proper car made using the `Car` blueprint.

// ---

// ### Summary for a 10-Year-Old:
// 1. **Blueprint (Constructor):** You made a recipe for toy cars (the `Car` function).
// 2. **Making Cars (Instances):** You used the recipe to build specific cars (with `new`).
// 3. **Show the Cars:** You looked at the cars you made (`console.log`).
// 4. **Check the Blueprint:** You double-checked if the cars were made using the recipe (`instanceof`).

// Now, you’re a toy car expert! 🚗




// *************************************************



































// 2. Prototypes

// Each Object created by "constructor" function have an access to all "methods" present inside that "constructor" prototype


// let Car= function(color,model){
//     // instance properties
//     this.carColor=color;
//     this.carModel=model;

// }

// // Method
// Car.prototype.startEngine=function(){
//     console.log("this is start engine method")
// }


// // We can also set "properties" to prototype
//  Car.prototype.company= "Honda"


// console.log(Car.prototype)
// let instanceOfCar= new Car("Yellow", 2021);
// let instance= new Car("Blue", 2000);
// console.log(instanceOfCar, instance)
// instanceOfCar.startEngine()

// console.log(instance.__proto__)
// console.log(instance.__proto__.isPrototypeOf(instance)) // true


// // It is same as
// console.log(Car.prototype.isPrototypeOf(Car))// False


// // Car.prototype is prototype "of all objectcs" created through the car constructor





// let arr=[2,3,5,7,8]; //[] is same as new Array([])

// console.log(arr.__proto__.__proto__); // chaining of prototype

// console.log(Object.prototype)







// 3. class declaration

class Car{
    constructor(color,model){
        this.color=color;
        this.model=model;

    }

    startEngine(){
        console.log("This is start engine method of Car class")
    }
}

Car.prototype.breakMethod= function(){
    console.log("Break Method of car")
}


let honda=new Car("Red",2022)
console.log(honda)
console.log(honda.__proto__)
// console.log(honda.__proto__.isPrototypeOf(honda))
// honda.breakMethod()




//Imp. points:-
// Classes are not hoisted
// Classes are also first class citizens(Pass as an argument or return)
// Classes are executed in strict mode


// #Modern Javascript Modules, and tooling:-

// "Exporting and importing" ES6 modules

// Importing module without value-->

// import {order,laptopPrice, quant as Q} from './product.js'

// console.log("importing module")

// order("Jack","mobile")

// console.log("Laptop Price =", laptopPrice)
// console.log("Quantity=",  Q)




// Importing in a single-variable-->

// import * as singleVariable from './product.js'

// console.log("importing module")

// singleVariable.order("Jack","mobile")

// console.log("Laptop Price =", singleVariable.laptopPrice)
// console.log("Quantity=", singleVariable.quant)

// console.log(singleVariable)






//# Top level await ES2022:-

// Before ES2022 we can use await only inside async function

// But in ES2022 introduced top level "await". It means now we can use "await" outside the async function

// console.log("Start using top level await")
// let response=await fetch("https://jsonplaceholder.typicode.com/todos")

// let data=await response.json()
// console.log(data)

// console.log("Finish....")

//Note:- isme ek problem h ki ye khud toh wait krta he h execute hone k liye lekin baakiyo ko bhi execute hone se rokk deta h , async-await ki trh niii h ki khud execute k liye wait kre aur baakiyo ko chalne de




console.log("Start using top level await");
let getTodos = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");

  let data = await response.json();
  console.log(data);
};
getTodos();

console.log("Finish....");

//Note:- isme baakiyo ko execute hone dega jb tk khud execute ho rha hoga, rokega ni kisi ko 






// # Modular Pattern:-

//IIFE
let resultIIFE=(function(){

    let orders=[];
    let addToCart=function(product,quantity){
        console.log(`${product} ordered ${quantity}`);
        orders.push(product,quantity)
    }
    return{
        orders,addToCart
    }


})()

resultIIFE.addToCart("Burger", 5)
resultIIFE.addToCart("Biryani",8)

console.log(resultIIFE.orders)
// # Prototypes in JS:

// A javascript  object is an entity having state and behaviour(propertiers and method)

// JS objects have a special property called prototype.

// We can set prototype using "__proto__"


// IMP POINT:- Object k andar ek in-built prototype hota he h 


// const employee={
//     calcTax(){
//         console.log("Tax rate is 10%")
//     }
// }


// const karanArjun={
//     salary:5000
// }

// const karanArjun2={
//     salary:5000
// }

// const karanArjun3={
//     salary:5000
// }

// const karanArjun4={
//     salary:5000
// }



// karanArjun.__proto__=employee
// karanArjun2.__proto__=employee
// karanArjun3.__proto__=employee
// karanArjun4.__proto__=employee


// console.log(karanArjun)
// console.log(karanArjun.calcTax())
// console.log(karanArjun2.calcTax())
// console.log(karanArjun4)
// console.log(karanArjun4.calcTax())





// Imp. Note:- If object & prototype have same method, object's method will be used.



// const employee={
//     calcTax(){
//         console.log("Tax rate is 10%")
//     }
// }


// const karanArjun={
//     salary:5000,
//     calcTax(){
//         console.log("Tax rate is 20%")
//     }
// }
// karanArjun.__proto__=employee

// console.log(karanArjun)
// console.log(karanArjun.calcTax())




// # Classes in JS:


// Class is a program-code template for creating objects.

// Those Objects will have some state(variables) & some behaviour(functions) inside it.



// class MyClass {
//     constructor() {   }

//     myMethod(){  }

// }


// let myObj=new MyClass()




class ToyotaCar{
    start(){
        console.log("start Engine")
    }

    stop(){
        console.log("stop Engine")
    }

    setBrand(brand){
        this.brand=brand
    }
}

// let fortuner=new ToyotaCar()
// console.log(fortuner)
// console.log(fortuner.start())
// fortuner.setBrand("fortuner")



// let lexus=new ToyotaCar()
// console.log(lexus)
// lexus.start()
// lexus.stop()
// lexus.setBrand("lexus")

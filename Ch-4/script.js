// # Introduction to objects in Javascript:-


let car={
    color:"black",
    model:"2022",
    company:"Honda"
}

console.log(car)

// Accessing the Javascript Object properties

console.log(car["company"]); // Honda
console.log(car.company)    //Honda


let propertyName="color"
console.log(car.propertyName) //undefined
console.log(car[propertyName]) // black
console.log(car.color) //black


// "Modify" the object property

car["color"]="brown";
car.model=2024;
console.log(car.color)  //brown
console.log(car.model)


// Delete properties of object


let obj={
    prop1:"value1",
    prop2:"value2"
}

console.log(obj.prop1)   //value1

delete obj["prop1"]
console.log(obj.prop1)  //undefined

let result=delete obj["prop1"]   // it always return true (means in boolean)
console.log(obj.prop1)  //undefined
console.log(result)//true

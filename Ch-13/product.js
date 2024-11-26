
console.log("Exporting module")


 function order(name,item){
    console.log(`${name} ordered the ${item}`)
}

function orders(name,item){
    console.log(`${name} ordered the ${item}`)
}

 let laptopPrice=55000

 let Quantity=4


 export {laptopPrice,Quantity as quant,order}
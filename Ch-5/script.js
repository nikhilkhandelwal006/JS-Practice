// JavaScript DOM (Document Object Model)

// Created by browser as the html load into the browser.

// Browser creates object of html called 'document object'.

//In Document object there is model of complete html in tree like structure

// console.log(document)
// console.log(document.URL)



// # Getting Html element/s using querySelector/All:-


//querySelector returns "first element" that match Css Selector
// To get all matched elements we use querySelectorAll

// let resultedElement=document.querySelector('p')
// console.log(resultedElement)

// let resultedElement=document.querySelectorAll('p')
// console.log(resultedElement)


//Access elements with class -->

// let resultedElement=document.querySelector(".coderdost")
// console.log(resultedElement)


// Access Elements with id -->

// let resultedElement=document.querySelector("#coders")
// console.log(resultedElement)



//# Other ways to get html elements:-



// let querySelectorElement=document.querySelectorAll('p')
// console.log(querySelectorElement)

// querySelectorElement.forEach(element=>{
//     console.log(element)
// })  // output: // <p> Hello Coders </p>
    // <p> Welcome Coders </p>

// Get Elements by tagName

// let tagNameElements=document.getElementsByTagName('p')
// console.log(tagNameElements)

// tagNameElements.forEach(element=>{
//     console.log(element)
// }) //error



// // Get Element By className

// let classNameElements=document.getElementsByClassName('coderdost')
// console.log(classNameElements)


// // Get elements by ID

// let elementById=document.getElementById('coders')
// console.log(elementById)




//# Updating And Changing Content:--

//innerText-->
// ignore spaces
// a.// let heading=document.querySelector('h1')
// console.log(heading.innerText) // welcome Coder Dost family

// // b.
// let content=document.querySelector('.content')
// // content.innerText += "<p> Great Coders </p>" //update
// console.log(content.innerText) //Hello Coders



// innerHTML-->
// it does not ignore spaces
//Retrieve and set content in HTML 
// a.// console.log(heading.innerHTML)//welcome Coder Dost family
 
// //b.
// content.innerHTML += "<p>Great Coders</p>"
// console.log(content.innerHTML) //<p>Hello Coders</p>









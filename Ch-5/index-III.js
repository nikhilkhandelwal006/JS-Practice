//////#########Part-3 HTML ################////

//# Event Basics(click Event):-

// // let eventElement=document.querySelector('.clickMe')
// // // console.log(eventElement)

// // eventElement.addEventListener('click',function(){
// //     console.log("clicked Me")
// // })

// let elements=document.querySelectorAll('li')

// elements.forEach(function(element){
//     element.addEventListener('click',function(e){
//         //   console.log("item Clicked")
//         console.log(e.target)
//         e.target.style.textDecoration="line-through"
//     })
// })




// # Create and Remove the element:-

//Creating-->

// const ul=document.querySelector('ul')

// let button=document.querySelector('.clickMe')
// // console.log(eventElement)

// button.addEventListener('click',function(){
//     // console.log("clicked Me")
//     let li=document.createElement('li')
//     li.textContent="Something New added";
//     // ul.prepend(li) //this will add element at above
//     ul.append(li)//this will add element at below

// })



//Removing-->

// let elements=document.querySelectorAll('li')

// elements.forEach(function(element){
//     element.addEventListener('click',function(e){
//         //   console.log("item Clicked")
//         console.log(e.target)
//         e.target.style.textDecoration="line-through"
//         e.target.remove()
//     })
// })





// # Bubbling and Delegation:-

//Bubbling-->

// const ul=document.querySelector('ul')
// ul.addEventListener("click",()=>{
//     console.log("Inside UL")
// })



// let elements=document.querySelectorAll('li')

// elements.forEach(function(element){
//     element.addEventListener('click',function(e){
//        console.log("inside LI")
//         e.target.remove()
//     })
// })


// Note:- Bubbling neeche se upr ki trf jata rhta h, jb tk usee root element ni miljata h tb tk .
 // mtlb jb apn li pe click krenge toh li k saath saath ul bhi pring=t hoga.


// # Delegation-->




let button=document.querySelector('.clickMe')
// console.log(eventElement)

button.addEventListener('click',function(){
    // console.log("clicked Me")
    let li=document.createElement('li')
    li.textContent="Something New added";
    // ul.prepend(li) //this will add element at above
    ul.append(li)//this will add element at below

})

const ul=document.querySelector('ul')
ul.addEventListener("click",(e)=>{
    // console.log("Inside UL")
    console.log(e.target.nodeName)
    if(e.target.nodeName=="LI"){
        e.target.remove()
    }
})


//Note:- ye delegation h, isme apn ne har ek element(li) p listener nii lgaya blki parent  p he  listener lgadia aur uss se fayda ye hua ki apn ko saare child p listener lgane ki zrurt nii pdi. 



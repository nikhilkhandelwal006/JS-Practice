//#More Events:-


// Copy Event--

let copyRightElement=document.querySelector('.copy')

copyRightElement.addEventListener('copy',()=>{
    console.log("OO! This is copy right Content")
})

// Mouse Move Event-->

let box=document.querySelector('.box')
box.addEventListener('mousemove',(e)=>{
    console.log(e.offsetX, e.offsetY)
})
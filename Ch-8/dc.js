let hour=document.querySelector('.hour')
let minute=document.querySelector('.minute')
let second=document.querySelector('.second')


let tickling=()=>{

   let currentDate=new Date()
//    console.log(currentDate)

   getHour=currentDate.getHours();
   getMin=currentDate.getMinutes();
   getSec=currentDate.getSeconds();

  
   hour.textContent=getHour
   minute.textContent=getMin
   second.textContent=getSec

}

setInterval(tickling,1000)
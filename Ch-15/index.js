//# Fetch API:

const URL="https://meowfacts.herokuapp.com/?id=3";
const facts=document.querySelector("#Facts")
const btn=document.querySelector("#btn")

// **This is through async-await(better way)-->

// const getFacts=async()=>{
//     console.log("getting data....")
//     let response=await fetch(URL)
//     console.log(response)
//     // console.log(response.status)
//    let data= await response.json();
// //    console.log(data)
//   facts.innerText=data.data[0]
// }

// btn.addEventListener("click",getFacts) 






// **This is through promise-chaining -->

function getFacts(){
    fetch(URL).then((response)=>{
      return response.json()
    }).then((data)=>{
        console.log(data)
        facts.innerText=data.data[0]
    })
}

btn.addEventListener("click",getFacts) 

//# Fetch API:

const URL="https://meowfacts.herokuapp.com/?id=3";
const facts=document.querySelector("#Facts")

const getFacts=async()=>{
    console.log("getting data....")
    let response=await fetch(URL)
    console.log(response)
    // console.log(response.status)
   let data= await response.json();
//    console.log(data)
  facts.innerText=data.data[0]
}

 
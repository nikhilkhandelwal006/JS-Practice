// //# Forms Events (Submit event):-

// let form=document.querySelector('.sign-up-Form')

// // let email=document.querySelector("#email")
// // let password=document.querySelector("#password")



// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     // console.log("Form is submitted successfully")

//     // console.log(email.value,password.value) //queryselector use krke nikali h value upr 


//     // console.log(form.email.value,form.password.value)  // iss se bhi apan email and password nikal skte h bina queryselector use kiye but condition ye h ki "name" defined hona chahiye html code m 

//     // console.log(form.userEmail.value, form.userPassword.value)// ye apn ne "name " se nikali h.   


// })





// Regular Expression (Regex):-

//It is a pattern of characters used to do pattern matching or we can say for "Data Validation".

// Implementation of password validation

//Length At least=8
// At least contain one Upper case letter
// At least contain one Lower case letter
// At least contain one digit 0 to 9



// let form =document.querySelector(".sign-up-Form")
// let email=document.querySelector("#email")
// let password=document.querySelector("#password")
// let passwordPattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let passwordValue=password.value;
//     console.log(passwordValue)
//     let result=passwordValue.match(passwordPattern)
//     console.log(result)
//     if(result){
//         console.log("Your password is strong")
//     }else{
//         console.log("try again")
//     }

// })





// **************************************
// *************Part-2 HTML ************
// **************************************



// Regular Expression Part-2 (regex):-

// Basic Form Validation using regex

// Implement username Validation


// username can only consist of A-Z or a-z--
// Length of username between 6 to 12


// let form =document.querySelector(".sign-up-Form")
// let user=document.querySelector("#name")
// let password=document.querySelector("#password")
// let userNamePattern=/^[A-Za-z]{6,12}$/

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let username=user.value
//     console.log(username)
//     //"test" method return boolean values
//      let result=userNamePattern.test(username)
//      console.log(result)
//      if(result==true){
//         console.log("Username is Valid")

//      }else{
//         console.log("username is Invalid try again")
//      }
// })
 






// keyboard Event:-



let form =document.querySelector(".sign-up-Form")
let user=document.querySelector("#name")
let password=document.querySelector("#password")
let userNamePattern=/^[A-Za-z]{6,12}$/



// Live Feedback

user.addEventListener('keyup',(e)=>{
    console.log(userNamePattern.test(e.target.value)) // return boolean value
   
    if(userNamePattern.test(e.target.value)){
        console.log("Passed")
        user.setAttribute("class","success")
    }else{
        console.log("Failed")
        user.setAttribute("class","error")
    }


})
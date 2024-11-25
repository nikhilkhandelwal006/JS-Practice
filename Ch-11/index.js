// Asynchronous Javascript

// Async Code example:-



// console.log(1)
// console.log(2)

// // Async code
// setTimeout(()=>{
//     console.log("call back function called after 3 seconds")
// },3000) //After 3 seconds


// console.log(3)
// console.log(4)
















// Making HTTP Request and HTTP respone status codes (Example):-

// Informational responses(100-199)
// Successful responses (200-299)
// Redirection messages (300-399)
// client error responses( 400-499)
// server error response (500-599)



// let request=new XMLHttpRequest();
// // console.log(request)
// // console.log(request.readyState)


// request.addEventListener('readystatechange',()=>{
// // console.log(request,request.readyState)
// if(request.readyState===4 && request.status==200){
//     // console.log(request.responseText)
//     console.log(request,request.responseText)
// }
// })





// // Set up the request
// request.open("GET","https://jsonplaceholder.typicode.com/todos")



// // Sending the request
// request.send()



//Use this link for practice to get JSON data in response
// https://jsonplaceholder.typicode.com/


// value    state         Description
//  0       UNSENT      Client has been created. open() not called yet.
//  1       OPENED      open() has been called.
//  2    HEADERS_RECEIVED  send() has been called, and headers
//  3   LOADING Downloading;  responseText holds partial data.
//  4     DONE     The operation is complete. 

 






// CallBack Function :-


let todos=(callback)=>{

    
let request=new XMLHttpRequest();


request.addEventListener('readystatechange',()=>{
// console.log(request,request.readyState)
if(request.readyState===4 && request.status==200){
    // console.log(request,request.responseText)
    callback(undefined, request.responseText)
}else if(request.readyState===4){
    // console.log("Data could not fetch")
    callback("Data could not fetch",undefined)
}
})








// Set up the request
request.open("GET","https://jsonplaceholder.typicode.com/todos")



// Sending the request
request.send()


}




todos((error,Data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(Data)
    }
})  // this is an async function and it will take time

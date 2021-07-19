// fetch api request from  www.jsonplaceholder.com 

// imported function to get a random number from 1 to 10

import { randomInt } from './random.js'
  
// user informations.

let userName = document.querySelector('#user_name') ,
     userId = document.querySelector('#user_id'),
    userEmail =  document.querySelector('#user_email'),
    userPhone = document.querySelector('#user_phone'),
    userWebsite =  document.querySelector('#user_website') ;

// display animation to  all user informations while the server request is loading..

 userId.innerHTML = `<div style = "height:2rem" class = "progress  w-100"> 
                           <div style = "font-size:1rem; opacity : 0.3"
                            class="progress-bar progress-bar-animated text-white bg-secondary h-100 progress-bar-striped w-100">
                            loading user id...
                            </div>
                       </div>` ;
 
 userEmail.innerHTML =   `<div style = "height: 2rem" class = "progress  w-100"> 
                           <div style = "font-size:1rem; opacity : 0.3"
                            class="progress-bar progress-bar-animated text-white bg-secondary h-100 progress-bar-striped w-100">
                            loading user email...
                            </div>
                       </div>` ;

userPhone.innerHTML =   `<div style = "height:2rem" class = "progress  w-100"> 
                           <div style = "font-size:1rem; opacity : 0.3"
                            class="progress-bar progress-bar-animated text-white bg-secondary h-100 progress-bar-striped w-100">
                            loading user phone...
                            </div>
                       </div>` ;

userWebsite.innerHTML =  `<div style = "height:2rem" class = "progress  w-100"> 
                           <div style = "font-size:1rem; opacity : 0.3"
                            class="progress-bar progress-bar-animated text-white bg-secondary h-100 progress-bar-striped w-100">
                            loading user website..
                            </div>
                       </div>` ;
                       
// create http request and get data using async and await

 async function xhttpRequest (url = `https://jsonplaceholder.typicode.com/users/${randomInt()}`){
      let response = await fetch(url) ;

          if(response.status === 200){  
    
     // wait for the server response 

                 let userInfo = await response.json() ;

// display the user informations recieved from web server to the web page when the response is ready.
                    
                    userName.innerHTML = `<strong> Name : </strong> ${ userInfo.name }` ;
                    userEmail.innerHTML =  `<strong> Email : </strong> ${ userInfo.email }`;
                    userId.innerHTML =   `<strong> Id : </strong> ${ userInfo.id }` ;
                    userPhone.innerHTML =   `<strong> Phone : </strong> ${userInfo.phone}` ;
                    userWebsite.innerHTML =   `<strong> Website : </strong> ${userInfo.website}`

          }
} ;

export { xhttpRequest }
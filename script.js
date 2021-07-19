 /* a script get user data from web server and display them to the webpage */
 
 import { xhttpRequest } from './serverRequest.js' ;

 window.addEventListener('load' , () => {

   //get send and display data when get user button was clicked 
       
        let getUserbtn = document.querySelector('.btn') ;
            getUserbtn.addEventListener('click' , () => xhttpRequest() ) ;
            
 })
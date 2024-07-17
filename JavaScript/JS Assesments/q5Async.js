//Asych callback 
  //create a function 
  //function fetchData(url, callback) 
  //add a condition
   //const error = Math.random() > 0.5
// should be asynchronous use setTimeout check if above error value is true then call the callback with message argument as error,url else send the argument as success,url
// the callback function will have message and url as argument, 
 // if error is null then print error occured {message} {url}
   //  else print the response is successfull the url is {url} and message is {message}


const u= "www.123movies.com";

function fetchData(u,callback){
    const error= Math.random()>0.5; 
    setTimeout(() => { error? callback("Error",u):callback("Sucessfull",u)        
    },1000);
    
}


function sample(message,url){
    if(message==="Error"){
        console.log(`Oops! an ${message} Occurred `,`\n please check: ${url}`,)
    }
    else{
        console.log(`Congrats your callback is ${message}`,`\n Use the link: ${url}`,)
    }

}

fetchData(u,sample);

//Example Of Asynchronious Program
console.log("Start");

 function fetchData() { 
    console.log("Fetching data... inside function ");
        setTimeout(() => {
                console.log("Excute AFter 2 Sec"); 
        }, 2000); 

console.log("End inside function");
}

fetchData();

console.log("End");

// Start
// Fetching data... inside function 
// End inside function
// End
// // (after 2 seconds)
// Execute After 2 Sec (it excute after 2 sec without stop the code)




//Example Of Synchronious Program
console.log("Start");

async function fetchData() { 
    console.log("Fetching data... inside function ");
    
    const response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched from API");
        }, 2000); 
    });
    
    console.log(response); 
     console.log("Execute after response which make it syncronious"); 
     
}
fetchData();

console.log("End");
console.log("End");
console.log("End");
console.log("End");

// Final Output


// Start
// Fetching data... inside function
// End
// End
// End
// End                                            (note: here the twist)
// (after 2 seconds)
// Data fetched from API
// Execute after response which makes it synchronous (it excute after 2sec which means aftter promise all code wait untill the promise resolve or after promise all code exection will stop )
//inside the function the code execution is synchronious


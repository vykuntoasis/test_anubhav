const timerFunction =  ms  => new Promise (resolve => setTimeout(resolve,ms));
    

const callMyFunction = () => {
    return timerFunction(5000).then( () => {

    console.log(" I AM WAIT funciton");

    
})
}    

const myFunction = async () => {
    console.log('Before calling async function');
    await callMyFunction();
    console.log("End of my funciton")
}

// const myFunction = () => {
//     console.log("before calling timer");

//     setTimeout(function(){
//         // this is call back function, once async processing is over
//         // sysm iwll call this callback function
//         console.log("After calling the timer");
//     },5000)

//     //console.log("After calling the timer");

// }

myFunction();


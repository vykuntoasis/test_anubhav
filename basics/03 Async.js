const { resolve } = require('path');
const util = require('util'); // built in module in node js


let callMyFunction = util.promisify((ms,resolve) => {
    setTimeout(resolve,ms)
})

console.log("start of code");
callMyFunction(3000).then ( () => {
    console.log("end of code")
})



// const timerFunction = (time) => new Promise ( resolve => {
//       setTimeout(resolve,time)
// })
// const callMyFunction = () => {
//    return timerFunction(5000).then(() => {
//     console.log("The call is now over")
//    })
// }
// const myFunction = async () => {
//     console.log ("start of day");
//     await callMyFunction();
//     console.log("End of code");
// }

// const myFunction = () => {
//     console.log("Staart of code");
//     setTimeout(() => {
        
//     }, 5000);
//     console.log("End of code");
// }

// myFunction();



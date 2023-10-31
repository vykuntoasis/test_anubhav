
const util = require('util'); // build in module inside of node js

let callMyFucntion = util.promisify((ms,resolve) => {
    setTimeout (resolve,ms)

}
)
console.log("The start of code");

callMyFucntion(3000).then (function(){
    console.log("END OF CODE")
})

// const timerFunction = (time) => new Promise(resolve => {
//     setTimeout(resolve,time)
// })

// const callMyFucntion = () => {
//     return timerFunction(5000).then(() => {
//         console.log("The call is over")
//     })
// }


// const myFunction = async () =>{
//   console.log("start of code");

//   await callMyFucntion();
//   console.log("End of code")
// }

// const myFunction  = () => {
//     console.log("Start of the code")
//      setTimeout(() => {
//         console.log("End of code")
//      }, 5000)
//     // console.log("End of code")
  

// }

//  myFunction();

// callMyFucntion()


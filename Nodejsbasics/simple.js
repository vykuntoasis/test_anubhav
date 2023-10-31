var aFruits = ["Apple","banana","cherry"]

// // console.log("Total no of items" + aFruits.length)

// console.log("The last item " + aFruits[aFruits.length-1])

// console.log("The first item " + aFruits[0])

aFruits.push("pineapple")
aFruits.splice(1,0,"Litchi")

var oEmp = {
    "empNo": 1000,
    "empName": "Anubhav",
    "salary": 1500,
    "currency": "EUR",

}

// console.log("Empn name is" ,oEmp.empName)

delete oEmp.currency

// console.log(oEmp)

var complexJSON = {
    "empTab" : [
        {
            "empNo": 9000,
            "empName": "Anubhav",
            "salary": 1500,
            "currency": "USD",
        
        },
        {
            "empNo": 9001,
            "empName": "Ananya",
            "salary": 8500,
            "currency": "EUR",
        
        },
        {
            "empNo": 9002,
            "empName": "Anubhav",
            "salary": 1500,
            "currency": "EUR",
        
        }
    ],
    "empStr": oEmp
}


// console.log(complexJSON)

// complexJSON.empTab.forEach(function(element){
//     console.log(element.empName)
// })

// console.log(JSON.parse(JSON.stringify(complexJSON)))

// console.log(oEmp);

// var oEmp2 = oEmp

// oEmp2.empName = "Jack"

var oEmp2 = JSON.parse(JSON.stringify(oEmp))
oEmp2.empName = "Jack"

console.log(oEmp)
console.log(oEmp2) // shallow copy


// for (let i = 0; i < aFruits.length; i++) {
//     const element = aFruits[i];

//     // console.log(element)
    
// }

// aFruits.forEach(function(element) {
//     console.log(element)
// });



// / var x = 10
// var y = 20
// var z = x + y

// console.log("tha vlaue of z is " +  "the data type is" + typeof(z) );



// console.log("welcome to anubhav trainings")




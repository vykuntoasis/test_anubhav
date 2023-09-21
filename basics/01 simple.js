// java script object notation
var oEmp = {
    "empNo" : 1000,
    "empName" : "Anubhav",
    "salary":1500,
    "currency":"EUR"
}

// console.log( "Emp name is --",oEmp.empName);
delete oEmp.currency
// console.log(oEmp);

//Compelex 
var complexJSON = {
    "empTab" :[
        {
            "empNo" : 9000,
            "empName" : "Ananya",
            "salary":2500,
            "currency":"USD"
        },
        {
            "empNo" : 9001,
            "empName" : "Saif",
            "salary":8500,
            "currency":"EUR"
        },
        {
            "empNo" : 9003,
            "empName" : "Syed",
            "salary":9750,
            "currency":"AED"
        }
    ],
    "empStr" : oEmp
}

// console.log(complexJSON);
complexJSON.empTab.forEach(function(Element){
        //   console.log(Element.empName)
})

// console.log(JSON.stringify(complexJSON));
// console.log(JSON.parse(JSON.stringify(complexJSON)));

// console.log(oEmp);
// var oEmp2 = oEmp;
// oEmp2.empName = "Jack";
// console.log(oEmp);
// console.log(oEmp2);

var oEmp2 = JSON.parse(JSON.stringify(oEmp)); // deep copy
oEmp2.empName = "Jack";
console.log(oEmp); 
console.log(oEmp2);

// 3 Work with complex data types like arrays and objects
// () paranthesis { } braces [] brackets
// var aFruits = ["apple","banana","cherry"]

// console.log("Total no if items are -" + aFruits.length);
// console.log("The last item is" + aFruits[aFruits.length-1]);
// console.log("The first item is - " + aFruits[0]);
// console.log("pineapple");

// aFruits.push("pineapple")
// aFruits.splice(1,0,"Lichi")
// // for (let i = 0; i < aFruits.length ; i++) {
// //     const Element = aFruits[i]
// //     console.log(Element)
// // }

// aFruits.forEach(function(Element)  {
    
//     console.log(Element)
// });
    
    
// var z = x + y ;

// console.log("The value is :" + z + " the data type is " + typeof(z));

// console.log("welcome to anaubhav trainings.com")


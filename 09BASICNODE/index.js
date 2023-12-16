this.tax = 1000;
console.log("Hello BTPians");
var x = 10;
var y = 20;


var addNumber = function(x,y){
  // classic function we cannot access global variables;
    return x + y + this.tax ;
  
}
var result = addNumber(x,y);


console.log(result);

mixNumber = (a,b) => {
    return a * b + this.tax;
}

var nextRes = mixNumber(x,y);

console.log(nextRes);

return;



var oEmp = {
    "empId" : 100010,
    "empName" : "Anubhav",
    "salary": 10000,
    "currency": "AED"
}

var aEmployees =[ 
    {
        "empId" : 100010,
        "empName" : "Anubhav",
        "salary": 10000,
        "currency": "AED"
    },
    {
        "empId" : 100020,
        "empName" : "Rohit",
        "salary": 10000,
        "currency": "AED"
    },
    {
        "empId" : 100030,
        "empName" : "Visha",
        "salary": 10000,
        "currency": "AED"
    },
    {
        "empId" : 100040,
        "empName" : "Kushal",
        "salary": 10000,
        "currency": "AED"
    }
]

console.log( oEmp.empId);

oEmp.empName = "Ananaya";
console.log(oEmp);

oEmp.smoker = false;

console.log( JSON.stringify(oEmp))
var arrFruits = ["apple","banana","cherry"]

arrFruits.push("++pineapple");

arrFruits.splice(1,0,"@litchi");

for (let index = 0; index < arrFruits.length; index++) {
    const element = arrFruits[index];

    console.log(element)
    
}

console.log("my firs item -->" + arrFruits[0]);
console.log("my last ite -->" + arrFruits[arrFruits.length -1 ])


const pi = 3.14;
var r = 10;
var a = 30;

var area = pi*r*r;

area += a;
console.log("Area of this circle is" + area);

for (const key in oEmp) {
    if (Object.hasOwnProperty.call(oEmp, key))
     { const element = oEmp[key]

        console.log(element)
    
    } 
}

console.log(aEmployees[2].salary)









    


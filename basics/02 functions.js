var aFruits = ["Apple","Banaa","Cherry"];
var aDryfruits = ["Raisin","Cashew","Almond"];

const anubhav = require("./reuse");


// function printArray(array){
//     array.forEach(element => {
//         console.log(element);
//     });
// }

// function printCount(array){
//     console.log("The count is =--->" + array.lenght);
// }

anubhav.printCount(aFruits)
anubhav.printArray(aFruits);
anubhav.printArray(aDryfruits);
anubhav.printCount(aDryfruits);

anubhav.printLastItem(aDryfruits)

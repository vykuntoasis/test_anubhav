this.name = "test";
module.exports = {
    printArray: function(array){
             array.forEach(element => {
                console.log(element)
             });
    },
    printCount:function(array){
        console.log("The count is =--->" + array.length);
        console.log("Name is " + this.name);
    },
    // arrow function global variable can be accessed
    printLastItem : (array) => {
        console.log( "The last item is =--=>" + array[array.length - 1])
        console.log("Name is " + this.name)
    }
}
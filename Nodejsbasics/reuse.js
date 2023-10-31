this.name = "reuse.js"

module.exports = {
    printArray: function (array) {

        array.forEach(element => {
            console.log(element)
        });
    },


    printCount: function (array) {
        console.log("The count is = ---->" + array.length);
        console.log("name is" + this.name)

    },

    // arrow function
    printLastItem: (array) => {
        console.log("The last item" + array[array.length - 1])
        console.log("name is" + this.name)
    }
}


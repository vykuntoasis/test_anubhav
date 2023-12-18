var util = require('util');

var events = require('events')

var Pokymon = function(name){
    this.name = name;
}

util.inherits(Pokymon,events.EventEmitter);

var raichu = new Pokymon('Raichu');
var pikachu = new Pokymon('Pickachu');
var myPokies = [raichu,pikachu];

myPokies.forEach(element => {
    element.on('jump',length => {
        console.log(element.name + " is jumped " + length + " Km")
    })
})

pikachu.emit('jump',20);
raichu.emit('jump',15)


// var events = require('events');

// var anubhav = new events.EventEmitter();

// anubhav.on('speak',() => {
//     console.log('hey folks ,how are you');
// })

// anubhav.emit('speak');




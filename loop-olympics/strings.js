
// var name = "rey"

// toUpperCase & toLowerCase
//     var uppercasedRey = name.toUpperCase()
//     console.log(uppercasedRey)
// toLowerCase
//     var lowercasedRey = uppercasedRey.toLowerCase()
//     console.log(lowercasedRey)

// concat
//     var s = "s"
//     var newName = name.concat(s)
//     console.log(newName)

// split - turn a string into an array
// var animal = "tigergerger"
// var characterArr = animal.split("g")
// console.log(characterArr)

// slice => cut up string
// var phoneNumber = "9514829045" // 951-482-9045
// var first3 = phoneNumber.slice(0 , 3)
// var second3 = phoneNumber.slice(3 , 6)
// var third4 = phoneNumber.slice(6)
// var phoneNumWithDashes = first3 + "-" + second3 + "-" + third4
// console.log(phoneNumWithDashes)

// indexOf = I need to know if the letter "a" occurs in a string
// var city = "New York City"
// var indexOfC = city.indexOf("!")
// console.log(indexOfC)


//1. Write a function that takes a string as a parameter and returns the same string 
//in all capital letters followed by all lowercase letters.
// var hello = "HelLo"
// var bigHello = hello.toUpperCase()
// var littleHello = hello.toLowerCase()
// var helloNew = bigHello + littleHello
// console.log(helloNew)

//2&3
// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

//Write a function that uses `[slice()] and the other functions you've written to return the first half of the given string.

// function hey (str) {
//     var stringLength = str.length
//     var halfString = stringLength / 2
//     var equalsRound = Math.floor(halfString)
//     var slicedArr = str.slice( 0 , equalsRound)
    

//     return slicedArr
//     }
// console.log(hey("hello"))
// console.log(hey("hello World"))

//4&5

// function hey (str) {
//     var stringLength = str.length
//     var halfString = stringLength / 2
//     var equalsRound = Math.floor(halfString)
//     var slicedArr = str.slice( 0 , equalsRound).toUpperCase()
//     var lowercase = str.slice(equalsRound)
//     var combine = slicedArr + lowercase

//     return combine
//     }
// console.log(hey("hello"))
// console.log(hey("hello World"))



//
// function hey (str) {
//     var sentence = str.split (" ");
//     for ( let i = 0 ; i < sentence.length ; i++) {
//         sentence[i] = sentence[i][0].toUpperCase + sentence[i].substr(1);
//     }
//     var sentTwo = sentence.join(" ")
//     return sentTwo
// }
// console.log(hey("hey friends! practice practice practice!"))

function Car(make, model, year, honkSound){
    this.make = make
    this.model = model
    this.year = year
    this.honkSound = honkSound
}


var jeep = new Car("Jeep", "Cherokee", 1995, "MEEERRRP")
var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAAARP")

console.log(jeep)
console.log(mazda.model)

Car.prototype.honk = function(){
    console.log(this.honkSound)
}

jeep.honk()
mazda.honk()
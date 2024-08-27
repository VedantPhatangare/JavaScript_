Array.prototype.sayHello = function () {
    console.log("Hello");

}

let languages = ['js','cpp']

languages.sayHello()

// i.e all constrcutors (built in like Object, Array,String etc. or userMade contrcutor functions) have direct acces to prototype, which can be used to add more custom methods and properties to it

// ******************
// prototypal inheritance
// we can acces other objects properties via other object by inheriting the prototype of need object in current object
let user = {
    name:"Ved",
    email:"v@gmail.com"
}

let admin = {
    privilaged:true,
    // __proto__:user
    // either above
}

// admin.__proto__ = user
// or either above



Object.setPrototypeOf(admin,user)
// but above is the most latest way


console.log(admin.email)
// *******************************
// adding a new custom method to all astrings via String Constructor
String.prototype.trueLength = function () {
    console.log(this)
    console.log(this.trim().length)
}

let myName = "vedant    "
myName.trueLength()

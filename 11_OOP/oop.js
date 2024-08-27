// Object Literal: it is literally a object..thats it
// it is a building block of oop iin js, similar to classes in other oop languages
const user = {
    username:"Vedant",
    LoginCount:10,
    SignedIn:false,
    getUserDetails: function () {
        // console.log(this.username, this.LoginCount)
        console.log(this)
    }
}
// console.log(user.constructor)
console.log(user.prototype)
// this is the object ,and inside given are properties which it provides to user, like Array is object, which has properties of methodds like length,map,filter etc. in prototypes

// user.getUserDetails()



// this: refers to current execution context/current scope
// new : gives new instance of the same prototype/object


// ******************Contructor Function******************
// constructor stores the refernce to itslef
// stores given params values and also returns current execution scope using this
function createUser(username,userId,LoginCount){
    this.username = username
    this.userId = userId
    this.loginCount = LoginCount
    this.greetings = function () {
        console.log(`Welcome ${this.username}`)
    }
    return this 
    // even without above line, new instances of created object still inherit the values passed as arguments
}

// let newUser = createUser("vedant",1,10)
// console.log(newUser) getting current instance of createUser using "this" but with some other unncessary properties



// let newUserAgain = createUser("Siddhant",2,12)
// console.log(newUser) it overwritten newUser
// thats why we use new keyword to create new instace of same constructor function



// but when use new,we get brand new memory and execution scope, and also to the point values hence less clutter
let newUser = new createUser("vedant",1,10)
let newUserAgain = new createUser("Siddhant",2,12)
console.log(newUser)
console.log(newUserAgain)

newUser.greetings()
newUserAgain.greetings()


// 
console.log(newUser.constructor)
// constructor stores the refernce to itslef
console.log(newUser instanceof createUser)
console.log(newUserAgain instanceof createUser)
console.log(newUserAgain instanceof Object)
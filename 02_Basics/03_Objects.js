//When we declear object using contructor then it is Singleton otherwise if decleared using literals then not singleton
//How to Declare
//1.
// Object.create() //using constructor

// 2.
// let obj = new Object({ //using constructor
//     name:"Vedant", roll:45
// })

const user = { //this is object literal
    name: "Vedant",
    "full name":"Vedant Pandurang Phatangare",
    age:22,
    isloggedIn:false,
    lastLoginDays: ["Mon","Wed"]
}

//how to access
console.log(user.name)
console.log(user['isloggedIn'])
// console.log(user.full name) wrong
console.log(user["full name"])

//use symbol as a key in object and access it

let mySym = Symbol("Key1")
let keyTable = {
    mySym : "myDupKey1", //it is wrong
    [mySym] : "MyKey1"
}
console.log(keyTable.mySym) //this does not treats it as a symbol but works by assuming it as a normal key
console.log(keyTable[mySym]) // this is the right way to access symbol as a key in object

//ovverwrite vales

keyTable.mySym = "duplicateKey"
console.log(keyTable.mySym)

//lock values
// Object.freeze(keyTable)
// keyTable.mySym = "anotherDuplicateKey"
// console.log(keyTable) // it doesnt changed


//add new key to object, how to add funtion as a value of a key 
keyTable.greetings = function () {
    console.log("Hello users")
}//we added a new key to keytable object, given a function value

keyTable.greetings() // this is how we access it
console.log(keyTable.greetings) // this is how we dont access it just refer it

//
user.greetings2 = function () {
    console.log(`Hello, ${this.name}`)
}
user.greetings2()
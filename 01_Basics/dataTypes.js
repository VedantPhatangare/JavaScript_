//Primitive Data Types
let Roll = 14 //number
let nullvalue = null
let Name = "Vedant" //string
let uniqueId = Symbol('123')
let pass= true //boolean(true/false)
let Bignumber = 1224524n // BigInt
let a; //undefined

// console.log(typeof(Roll))
// console.log(typeof null)
// console.log(typeof "Vedant")
// console.log(typeof Symbol)
// console.log(typeof pass)
// console.log(typeof BigInt)
// console.log(typeof a)
console.table([typeof(Roll),typeof nullvalue,typeof "Vedant", typeof uniqueId, typeof pass,typeof Bignumber,typeof a])

let stringpassed = "12"
let stringNumber = Number(stringpassed)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// let boolvalue = 1
let boolvalue = ""
let boolNumber = Boolean(boolvalue)
// console.log(boolNumber) // true for any non-empty string and 1. flase for empty string and 0
// console.log(typeof boolNumber);

//== and other comaprison operators works differently like , null <= 0 is true as all comparison operators treat null as 0, but for null == 0 is false as "==" operator treats null as null
//but "2" == 2 is true as "==" converts types
//but === checks the types and value both so "2" === 2 is false


//reference (NOn primitive data types)
//Array Object  Functions
let nameList = ["vedant", "siddhant"]
console.log(typeof nameList);

let myObj = {
    name: "vedant",
    age: 21
}
console.log(typeof myObj);

let myFunction = function() {
    console.log("I am a funnction call")
}
console.log(typeof myFunction);

//Prmitive data types as assigned with a copy (stack)
//so if 
/*name = "ved"
name2 = "Ved"
name2 = "Vedant"
then name still stays Ved
*/
//but for non primitive types, ssigned with a direct reference, so if
/*obj1 = {
    roll: 43
}
    obj2 = obj1
    obj2.roll = 1
 
then original object also changes bcz obj2 is also refernced by a same memory as of original obj 
*/
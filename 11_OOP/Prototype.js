const user = {
    username:"Vedant",
    LoginCount:10,
    SignedIn:false,
}
console.log(user.constructor)
// console.log(user.prototype)
console.log(Object.getPrototypeOf(user))





function mulBy5(num) {
    // console.log(this)
    this.num = num
    return num*5
}
mulBy5.value = 2 
// made function to behave like object
// everything is a object in js
// if array,string,object is made then it has prototype object (of type of your dataStructure) other than its properties , and again that prototype object contains another prototype but of object type
//if.e object -> then furthur types this is the heirarchy of prototyoe inheritance 

console.log(mulBy5(5))
console.log(mulBy5.value)
console.log(mulBy5.constructor)


// console.log(mulBy5.prototype)
//  prototype of function is like "this" of object, which also stores the current context of that function using this
// all prototype properties and this context are available on function

mulBy5.prototype.incrNum = function() {
    this.num++
}

console.log(mulBy5.prototype)

let sampleObj = new mulBy5(3)
sampleObj.incrNum()
console.log(sampleObj.num)
console.log(Object.getPrototypeOf(sampleObj))
// function checkUsername(username) {
//     // db calls
//     this.username= username
//     console.log("Called")
// }

// function createUser(username,email,password) {
//     // this.username = username
//     checkUsername(username)
//     this.email = email
//     this.password = password
// }

// let myAcc = new createUser("v10","vedant@google.com",12345)
// console.log(myAcc)

// // console.log(myAcc) only email and password are set, not username
// // this is bcz createUser has its own execution context and checkUsername has its own , so "this" in checkUsername function refers to it own separate execution context , then after execution, it gets removed from call stack , so outer function cannnot refer its properties


function checkUsername(username) {
    // db calls
    this.username= username
}

function createUser(username,email,password) {
    // this.username = username
    checkUsername.call(this,username) 
    // we passed this in arguments as first optional param, it gives the refernce of execution context of createUser function to the checkUsername, so that it can store the data in parent function properties direcly, so call is used to set "this"
    this.email = email
    this.password = password
}

let myAcc = new createUser("v10","vedant@google.com",12345)
console.log(myAcc)

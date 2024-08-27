// classes are just syntactical sugar

// class user{
//     constructor(username,email,password){
//         this.username = username,
//         this.email = email,
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     modifyUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const newUser = new user("bhaiya",'mymail@go.com',123)

// console.log(newUser.encryptPassword())
// console.log(newUser.modifyUsername())


// same we waas doing but with constrcutor function, and then adding methods to prototype of that function, like below
// So this is behind the seen , happening using prototype and contructor, so class is just a way to do it more conviniently

function User(username,email,password){
        this.username = username,
        this.email = email,
        this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.modifyUsername = function(){
    return `${this.username.toUpperCase()}`
}

const newUser = new User("bhaiya",'mymail@go.com',123)
console.log(newUser.encryptPassword())
console.log(newUser.modifyUsername())
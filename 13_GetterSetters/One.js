// GetterSetter
// 1.Using Constructor
// class user  {
//     constructor(email,password) {

const { set } = require("mongoose");

        
//         this._email = email,
//         this._password = password
//     }
//     get email(){
//         return this._email.toUpperCase()
//     }
//     get password(){
//         return this._password.toUpperCase()
//     }
//     set email(value){
//         this._email = value
//     }
//     set password(value){
//         this._password = value
//     }
// }

// let sid = new user('sid@email.com',"abc")
// console.log(sid._email);
// console.log(sid._password);//real ones
// console.log(sid.password);
// console.log(sid.email);//modifies by getter, not original

// sid.email = "timepass@krto.com"
// console.log(sid._email);
// console.log(sid.email);

// 2.Using Functions


// function user(email,password) {
//     this.email = email
//     this.password = password

//     Object.defineProperty(this,email,{
//         get: function () {
//             return this._email.toUppercase()
//         },
//         set: function(value) {
//             this._email = value
//         }
//     })
// }

// let user1 = new user("v@dant.com","abc")
// console.log(user1._email)


// 3 Using Object

let user = {
    _email:"v@dant.com",
    _password:'abc',
    
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
         this._email = value
    }
    
}
let user1 = Object.create(user)

console.log(user1.email);
console.log(user1._email);
 
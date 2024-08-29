// const youtubeUser = new Object() //decleared by constructor so singleton
const youtubeUser = {} // decleared by literals , so non-singleton, but gives same output as singleton object

youtubeUser.id= "123abc"
youtubeUser.name= "Chikku"
youtubeUser.isLoggedIn= false

// console.log(youtubeUser)

const regularUser = {
    email: "random@gmail.com",
    fullname:{
        userFullName: {
            firstname: "Vedant",
            lastname:"Phatangare"
        }
    }
}
// console.log(regularUser.fullname?.userFullName.firstname) 
//? shows optional chaining



//*************combining objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2} //obj inside obj problem

const obj3 = Object.assign({},obj1,obj2) //{} is targe i.e we need only single object made up of furthur source object parameters, but {} is optional

const obj4 = {...obj1,...obj2} // it is also same concept

// console.log(obj3)
// console.log(obj4)



//************** how to access Array of object
const users = [
    {
        id:1,
        email:"random@gmail.com"
    },
    {
        id:2,
        email:"random1@gmail.com"
    },
    {
        id:3,
        email:"random2@gmail.com"
    }
]

// console.log(users[1].email)




//*****************Looping on keys and values as an array************** */

console.log(youtubeUser)

console.log(Object.keys(youtubeUser))
console.log(Object.values(youtubeUser))
console.log(Object.entries(youtubeUser))
let entries = Object.entries(youtubeUser)

for (const [key,value] of entries) {
    console.log(`${key}:${value}`)
}

//How to check the key is available inside any object or not

console.log(youtubeUser.hasOwnProperty('name')) //gives boolean value
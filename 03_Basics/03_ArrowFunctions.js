//"this" keyword refers to the current context of that object scope.
//  inside node, globally scope "this" gives empty object.
// but in browser , globally scoped this  returns window object, which have all events nessesary for user to ineract with browser like click and all


//*********************use of "this" */
/*
const userInfo = {
    name:"Vedant",
    welcomeMsg: function(){
        // console.log(`hello, ${name}`)
        // instead of this hardcoded approach we should refer to a current scope which is accessed by "this" keyword, so use below method
        console.log(`Welcome ${this.name}`)
        console.log(this) //shows current context of userInfo object
    }
}

// const {welcomeMsg:wlc} = userInfo
// wlc() //idk why gives undefined
//obj destrcuturing not working for chaging the propery values or calling the method stored in property


// userInfo.welcomeMsg()
// userInfo.name = "Siddhant"
// userInfo.welcomeMsg()

// console.log(this) gives empty object

*/



// *************This in Functions*************
/*function One() {
    const username = "ved"
    console.log(this) //return a non-empty object in normal function
    console.log(this.username) //gives undefined, so "this" does not works in functions

    One()
}*/


// **********This in arrow functions**********
/*
const One = ()=>{
    const username = "ved"
    console.log(this.username) // same , this dosent work in arrow function also, in short "this" only stores current context in Objects 
    console.log(this) // unlike normal function , it gives empty object
}
One()
*/

 
//Pure Arrow function 
//implicit return: if we have single statement to return, then we can return it without using {} and without return

const addThree =(num)=> num+3
const addFour =(num)=> (num+4) //this is also right
console.log(addThree(2))
console.log(addFour(2))

//implicit return may have (), but {} dosent work for implicit, bcz then it considers it as explicit and looks for return keyword
const addName=(Name)=>({name:Name})
console.log(addName("Vedant"))















// *******Key Takeaways***********
// this in global return empty object in node, but return window object in browser console
//this is only for Object (to access current variables in object scope), any functions does not use this
//arrow function are different that normal functions, bcz in arrow function this return empty object where normal functions return non-empty object
//implicit return means no need to write return for single statement, may use parenthesis "()" (in case we want to return an object) but dont use "{}"
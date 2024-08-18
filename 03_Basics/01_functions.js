

function sum(num1, num2){  
    console.log(num1+num2)
}
// sum // is it only a refernce

//parameters; defined at the time of function definition
//arguments: when we pass actual values in that prameters at the time of func calling 


/* 
sum(undefined,5)
//  give NaN
sum(3,"5") 
// assumes 3 as a string bcz of 5 , so gives 35

sum("3",5) 
// assumes 5 as a string bcz of 3 , so gives 35 

sum(null,3)
//gives 3 as null is considered as 0 by add operator
*/
/*
const result = sum(1,3)
// console.log(result)
//func not returning anything
*/

function loginUsermsg(username = "Sam") { //sam will be assigned to username if no value is passed 
    // if(username === undefined){
    //     console.log("Please Enter a username")
    //     return;
    // }
    if(!username){
        console.log("Please Enter a username")
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUsermsg(""))


/* 
// function totalCartPrice(...num1) { //...is not spread operator here, it is Rest Operator, it return array of all values passed as arguments to the functions
//     console.log(num1)
// }
// totalCartPrice(200,300)

function totalCartPrice(num1,num2,...num3) { //...is used to combine all arguments in array, after passed arguments to defined parameters before it
    console.log(num1)
    console.log(num2)
    console.log(num3)
}
totalCartPrice(200,300,400,500)
*/


//handling object
function handleObject(anyObject) {
    console.log(`Name: ${anyObject.name}\nbatch: ${anyObject.Batch}`)
}

const user = {
    name:"Vedant",
    batch: 2024
}

// handleObject(user);
handleObject({
    name:"vedant",
    batch:2024
});

//hanfling the array

function returnFirstIndex(anyArray){
    console.log(anyArray[1])
}
// const prices = [100,200,450]
// returnFirstIndex(prices)
returnFirstIndex([100,200])


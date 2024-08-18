//const let var
// global scope in node files is different than the global scope in the browser console,


//nested acope
function one() {
    const username = 'sam'

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);
    two()
}
one()

if(true){
    const userName = "ve"
    if(userName === "ve"){
        const anotherUser = "se"
        console.log(userName + anotherUser)
    }
    // console.log(anotherUser)
}
// console.log(userName)


// *******************

console.log(addOne(2)) //runs 

function addOne(num) {
    return num+1;
}//normal function


//*********************** */



// console.log(addTwo(5)) 
const addTwo = function (num) {
    return num+2;
}//same normal func but sometimes called expression,bcz it is stored in variable

// but normal function can be called before its definition but not expresiion function
//related to hoisting and execution context
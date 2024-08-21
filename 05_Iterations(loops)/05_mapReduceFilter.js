// both implicit and explicit return dont work in forEach

let numbers = [1,2,3,4,5]

//map:- executes and returns value for each element of array
//returns new Array

// let newNums = numbers.map(num=> num*10)
// console.log(newNums)


//filter
//only returns element who satisfy the condition
// let newNums = numbers.filter((nums)=> (nums >= 3 ))
// console.log(newNums)


// Reduce
// ssample usecase: if we want to get sum of all items prices

// console.log(numbers.reduce((acc,nums)=>(nums+acc), 0))



/*
const itemsInCart =[
    {
        name:"Item1",
        price:3500,
        category : "electronics"
    },
    {
        name:"Item2",
        price:299,
        category : "books"
    },
    {
        name:"Item3",
        price:599,
        category : "books"
    },
    {
        name:"Item4",
        price:1500,
        category : "accesories"
    },
    {
        name:"Item5",
        price:1200,
        category : "clothing"
    },
    {
        name:"Item6",
        price:17500,
        category : "electronics"
    },
]

console.log(itemsInCart.filter((item)=> item.price >=500 && item.category === "books"))

*/
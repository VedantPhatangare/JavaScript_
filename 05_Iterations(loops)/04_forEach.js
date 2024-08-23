//for Each: comes inbuilt with the prototype of array 
//it takes a callback function
//automatically has all the information about the array


let arr = [1,2,3,4,5]

// arr.forEach((item,index,arr)=>{
// console.log(`${item} at index ${index} of array ${arr}`)
// })
// ********************************
// function printElement(item,index,arr) {
    // console.log(`${item} at index ${index} of array ${arr}`)
// }
// arr.forEach(printElement)

let arrayObj = [
    {
        name:"Vedant",
        course:"CSE"
    },
    {
        name:"Siddhant",
        course:"IT"
    }
]

arrayObj.forEach(item => {
    console.log(item.name)
});

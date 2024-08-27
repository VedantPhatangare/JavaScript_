// // promise1
const promiseOne  = new Promise((resolve,reject)=>{
    // Do an Async Task
    // DB Calls,cryptogrpahy, network calls
    setTimeout(()=>{
        console.log("async Task is complete")
        resolve()
    },1000)
})
console.log("hi")
// promiseOne.then(()=>{
//     console.log("Promise Consumed");
    
// })
// // promise 2
// new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("Async taks2 Done");
//         res()
//     },3000)
// }).then(()=>{
//     console.log("Promise2 consumed");
     
// })


// // promise3
// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"GundBhaiya",email:"gund@appa.com"})
//     },1000)
// })
// promiseThree.then((user)=>{
//     console.log(user)
// })


// promise4
// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resolve({username:"GundBhaiya",email:"gund@appa.com"})
//         }else{
//             reject("ERROR: Something went wrong")
//         }
//     },1000)
// })
// promiseFour.then((user)=>{
//      console.log(user)
//      return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     // console.log(error) 
//     return error 
// })

// promise 5
// const PromiseFive = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         const error = true
//         if(!error){
//             res({username:"vedant"})
//         }else{
//             rej("Error Occured")
//         }
//     },1000)
// })

// handling PromiseFive using then catch
// .then((data)=>{
//     console.log(data.username)
// })
// .catch((error)=>{
//     console.log(error);
//     return error
// }).finally(()=>{
//     console.log("Promise Five Setteled !")
// })

// handling promise 5 using async await(try catch) instead of (then catch) 

// async function consumePromiseFive() {
//     try {
//         let response = await PromiseFive
//         console.log(response.username)
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()



// handling api request via async await (try catch)
async function getData(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        // if(response = {}){
        //     throw new Error("Empty Data")
        // }
        let data = await response.json()
        console.log(data);
    
    } catch (error) {
        console.log(`E:${error}`)
    }
}
getData()

// handling using then catch

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     // let data = response.json()
//     // console.log(data)
//     // we cannot directly get response.json() in variable and print it , bcz it taked time to convert it into json, tats why we put await in front of response.json() in try catch in async await. aso here , all then catch statements executes sequentially, so  we nned to define anohter then which executes only after response.json() in first the  is completed 
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)

// })
// .catch((err)=> console.log(err))



// there is a special queue called "micro task queue" or "priority queue" which has more priority than normal callback task queue fir other aync operations
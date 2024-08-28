let understandObj = {
    name:"vedant",
    DOB: "idk",
    isAvailable: false,
    isOkay: function(){
        console.log("yes");
    }
}

let descriptor = Object.getOwnPropertyDescriptor(understandObj,'name')
console.log(descriptor);

Object.defineProperty(understandObj, 'name',{
    writable:false,
    enumerable:false
})

understandObj.name = "nothing"
// console.log(understandObj.name); name not changed

for (const [key,value] of Object.entries(understandObj)) {
    console.log(`${key}: ${value}`)
}//for of dosent support object as they are not iterable but we can make obj iterbale by extrascting its entries so we can iterate on them

// here name dosent get printed, as we set its property descriptor as not enumerable and not writable as well

// but for of printed whole function that we dont want to add a check in loop

for (const [key,value] of Object.entries(understandObj)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`)
    }
}//now its not iterating function


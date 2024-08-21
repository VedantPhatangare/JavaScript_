//for of: wroks on array,string, map. but dont work on Object

const myArray = [1,2,3,4,5]
for (const num of myArray) {
    // console.log(num)
}

const greetings = "Welcome to Javascript !"
for (const char of greetings) {
    // console.log(char)
}
//map: holds only unique keys-value pairs
const myMap = new Map()
myMap.set("IN","India")
myMap.set("USA","United States of America")
myMap.set("USA","America") //overwrites previous

// console.log(myMap)

for (const pair of myMap) {
    // console.log(pair)
}

// for (const [key] of myMap) {
//     console.log(key)
// }

// for (const [value] of myMap) {
//     console.log(value)
// }
//still considers value as keys, so first argument is for keys and second for value , names given dosent matter

for (const [key,value] of myMap) {
    console.log(key + " :-" + value)
}

const myObject = {
    js:"JavaScript",
    cpp:"C++"
}

// for (const [key] of myObject) {
//     console.log(key)
// }
// gives error "not iterable " for objects

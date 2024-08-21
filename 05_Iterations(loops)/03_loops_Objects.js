// forin(work on indexes) :- for objects , can be used for arrays but not for maps as they are not iterable

const myObject = {
    js:"JavaScript",
    cpp:"C++"
}

for (const key in myObject) {
   console.log(`${key} :- ${myObject[key]}`)
}


const arr = ["cpp", "java","python"]
for (const key in arr) {
   console.log(`${key} :- ${arr[key]}`)
}


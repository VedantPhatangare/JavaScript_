let str=  "Vedant"
console.log(`HI my name is ${str}`)
let str1 = new String("Siddhant") // invokes an Object (DO it in browser to see it)
let str2 = "  vedant    "
let arr = [0,1,2,3,4,5]
let strSplit = "CSE-2024-Graduate"
console.log(str1[4]);
console.log(str.at(4));
console.log(str.charAt(4));
console.log(str.charCodeAt(4));
console.log(str.indexOf('n'));
console.log(str.codePointAt(4));
console.log(str.concat(str1))
console.log(str.endsWith('t'))
console.log(str.startsWith('v'))
console.log(str.includes('sid'))
console.log(str.toUpperCase())
console.log(str.toLowerCase('t'))
console.log(str.toLocaleUpperCase())
console.log(str2)
console.log(str2.trim())
console.log(str2.trimStart())
console.log(str2.trimEnd())
console.log(str.substring(0,4))
console.log(strSplit.split('-',3)) //splits the string and returns the array of seperated strings (limit the the number of elements needed to returned in array)
console.log(str.slice(-4,4))  // difference bet slice and substring is , substring treats -ve or Nan as 0, but slice treats Nan as 0 but for -ve numbers it treats them as reverse indexes to find the value
// console.log(arr.splice(0,2))
// console.log(arr)
console.log(str.replace("Ve", "Si"))
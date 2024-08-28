let arr = [1,2,3]
let arr2 = [3,4,5]
//push, concat, spread-operztor
// arr.push(arr2) //modifies original array but inserts array inside array instead of combining them
// console.log(arr)
// let arr3 = arr.concat(arr2) //it actually combines two arrays and return a new array, dosent modifies the original array
// console.log(arr3)
// let arr3 = [...arr,...arr2] //... is a spread operator which dissloves the array contsiner but preserves its elements
// console.log(arr3)


// // Array.flat
let complexArr = [6,7,[1,2,3],8, [9,[10,11]]]
let flattendArr = complexArr.flat(2)
 //infinity as depth also can be given
console.log(flattendArr)

//Array.isArray
// console.log(Array.isArray("Ved"))


//Array.from
// console.log(Array.from("Vedant")) // different from split as it considers spaces also
// let map = [[1,2],[2,3],[2,3]]
// console.log(Array.from(map))
// const mapper = new Map([ //this way keys are the actual first element of every pair
//         ["1", "a"],
//         ["2", "b"],
//     ]);
// let mapper = [["1","a"],["2","b"]] //This way keys are default 0 ,1... 
//   console.log(Array.from(mapper.values()))
//   console.log(Array.from(mapper.keys()))

//Array.of
// let a = 100
// let b = 200
// let c = 300
// console.log(Array.of(a,b,c))

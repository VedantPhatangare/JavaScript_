// Immediately invoked function expression

//sometimes pollution from global scope disturbes a function as all global values are available in functions, so use IIFE
//IIFE used to immediately invok the function


/*function dbConnect() {
    console.log("dB Connected")
}

dbConnect()
*/

//HOw to use IIFE
// ()() 
//first(): function definition, second(): function execution
// instead of writing a func and then call, we wrap function itslef in () then call it simply using another ()

(function dbConnect() {
    //named iife 
    console.log("dB Connected")
})();
//bcz IIFE dont know where to stop , ";" is added after IIFE to stop its execution context and run furthur IIFE

((name)=> {
    //unnamed iife (arrow function)
    console.log(`dB Connected Succesfully, Hello ${name}`)
})("Vedant")// we can pass arguments via seond parenthesis like normal function call "func("xyzName")"

console.log("HI") // it runs without adding the semicolon after iife



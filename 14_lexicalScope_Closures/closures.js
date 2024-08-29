function outer() {
    let name = "unknown"
    function inner() {
        console.log(name)
    }
    return inner
}

let myFunc= outer()

myFunc()
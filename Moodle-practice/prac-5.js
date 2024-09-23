function classifyNumbers(n) {
    if (n % 5 === 0 && n % 3 === 0) {
        console.log("Divisible by both 3 and 5")
    }
    else if (n % 3 === 0) {
        console.log("Divisible by 3")
    }
    else if (n % 5 === 0) {
        console.log("Divisible by 5")
    }

    else {
        console.log("Divisible by both 3 and 5")
    }
}
let n = 20;
classifyNumbers(n);
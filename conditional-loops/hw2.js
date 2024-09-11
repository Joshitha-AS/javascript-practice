// factorial of two numbers

function calculatefactorial(n){
    let i=1;
    let factorial=1;
    while(i<=n){
        factorial= factorial*i;
        i++
    }
    return factorial
}

let n=5;
let result= calculatefactorial(n);
console.log(result);
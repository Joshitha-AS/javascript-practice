//first N multiples of  5

function sumof(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * 5;
    }
    return sum
}
let n = 3;
let res= sumof(n);
console.log(res);





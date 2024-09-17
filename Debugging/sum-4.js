function generateSeries(n) {
    let str = "";
    for (let i = 1; i <=n; i++) {
        let term = i ** 2; 
        str += term + " ";
    }
    return str;
}

let n = 10;
let result = generateSeries(n);
console.log(`The first ${n} terms of the series are: ${result}`);
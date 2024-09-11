// fix error

function sumNumbers(n) {
    let sum = 0;
    let i = 0;
    while (i <= n) {   //less than or equal to;
      sum += i;
      i++;
    }
    return sum;
}
let n=30;
let res= sumNumbers(n);     //call the function
console.log(res);           //print the result

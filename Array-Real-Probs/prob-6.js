//Given a number of 7 digits,
//print the sum of the digits of the number.


function digitsum(sum) {
    let num = 2023266;
    let digits = [];
    while (num > 0) {
        let digit = num % 10;
        digits.unshift(digit);
        num = Math.floor(num / 10);
    }
    for (i = 0; i < digits.length; i++) {
        sum += digits[i];

    }
    return sum;
}
let sum=0;
console.log(digitsum(sum));

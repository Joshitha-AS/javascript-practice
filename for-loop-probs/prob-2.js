

function nodigits(num){
let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10); // Remove the last digit
        count++;
    }
    return count;
}
let num=1909293;
console.log(nodigits(num));



// function nodigits(num){
// let count = 0;
//     while (num > 0) {
//         num = Math.floor(num / 10); // Remove the last digit
//         count++;
//     }
//     return count;
// }
// let num=1909293;
// console.log(nodigits(num));


function countDigit(num){
    let count=0;
    while(num>0){
        num=Math.floor(num/10);
        count++;
    }
    return count;
}
let num=123456789;
console.log(countDigit(num));

let str= "joshitha";
let revstr="";
for(let i=str.length-1; i>=0; i--){
    revstr+=str[i];
}
console.log(revstr);


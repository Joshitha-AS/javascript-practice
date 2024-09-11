//Write a function sumNumbers that takes a number n as a parameter and
//  returns the sum of all numbers from 1 to n using a while loop.
function sumNumbers(n){
    let i=0;
    let sum=1;
    while(i<=n){
        sum=sum+i;
        i++;
    }
    return sum
}
let n=10;
res= sumNumbers(n)
console.log(res);

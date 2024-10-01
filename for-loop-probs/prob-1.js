//a program that takes two inputs, a base b and an exponent e, and calculates b^e 
function exponent(b,e){
    let i=1;
    while(i<=b){
        let ans= i**e;
        console.log(ans);
        i++;
    }
    return;
}
let b=10;
let e=2;
let res=exponent(b,e);
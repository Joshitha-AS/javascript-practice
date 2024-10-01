// let a=7;
// if (a**(n-1) % n ==1){
//     console.log("it is pime number")
// }
// else{
//     console.log("it is not a prime number")
// }

function isprime(num){
    if(num<=1) return false;
    for(let i=2; i<= Math.sqrt(num);i++){
        if(num%i===0) return false;
    }
    return true
}
let primes=[];
for(let i=2; i<=20; i++){
    
    if(isprime(i)){
        primes.push(i);
    }
    console.log(primes);
}
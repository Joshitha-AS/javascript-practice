//fibonacci series

let fibo=[0,1];
for(let i=2; i<=10; i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log(fibo);

//fibonacci series method 2

let n1=0;
let n2=1;
console.log(n1);
console.log(n2);
for(let j=2; j<=10; j++){
    nextterm= n1+n2;
    console.log(nextterm);
    n1=n2;
    n2=nextterm;
}

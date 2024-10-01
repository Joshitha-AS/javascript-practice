// sum of numbers from 1 to 100
function sumOfNum(N){
    let sum=0;
    for(let i=1; i<=N; i++){
        sum= sum+i;
    }
    return sum;
}

let res=sumOfNum(100);
console.log(res);


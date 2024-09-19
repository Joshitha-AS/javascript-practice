let scores=[90,95,85,99,70];
let sum=0;
let avg=0;
let len=scores.length;
for(i=0;i<len;i++){
    sum+=scores[i];
    avg=sum/len;
}
console.log(avg);

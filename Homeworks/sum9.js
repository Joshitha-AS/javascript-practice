let populations = [50, 60, 70, 80, 90];
let sum=0;
let avg=0;
let len=populations.length
for(let i=0;i<len;i++){
    sum+=populations[i];
     avg=sum/len;
}
console.log(avg);


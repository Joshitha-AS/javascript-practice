// function sumEvenNum(n){
//     let sum=0;
//     for(i=0;i<=n;i++){
//         if(i%2===0){
//            sum+=i;
//         }
//     }
//     return sum;
// }
// console.log(sumEvenNum(20));


//prob-2
function multiplesof(n,times){
    for(i=1;i<=times;i++){
        console.log(i*3);
    }
}
let n=3;
let times=10;
multiplesof(n,times);

//prob-3
function results(teamScore,targetScore,overLeft){
    if(teamScore>=targetScore){
        console.log("team wins by DL method");
    }
    else if(overLeft>0 && teamScore<targetScore ){
        console.log("Match to be continued");
    }
    else{
        console.log("team loses by DL method");
    }
}
let teamScore=30;
let targetScore=50;
let overLeft=5;
results(teamScore,targetScore,overLeft);
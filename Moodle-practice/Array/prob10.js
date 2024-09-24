let l1= [true, false, true];
let l2=[false, true, true];
let resultarray=[];
for(let i=0; i<l1.length;i++){
    result= l1[i]&&l2[i];
    resultarray+=result +",";
}
console.log(resultarray);


//prob
let expenses=[20,50,50];
let sum=0;
for(i=0;i<expenses.length;i++){
    sum+=expenses[i];
}
console.log(sum);

//prob
let grades=[25,55,30,10];
let total=0;
let avg=0;
for(i=0;i<grades.length;i++){
    sum+=grades[i];
    avg=sum/grades.length;
}
console.log(avg);


//prob
let ages=[12,45,18,19,9];
for(i=0;i<ages.length;i++){
    if(ages[i]>=18){
        console.log(ages[i]);
    }
}

//prob
let integers=[12,45,66,4,5];
let count=0;
for(i=0;i<integers.length;i++){
    if(i%2===0){
        count++;
    }
}
console.log(count);



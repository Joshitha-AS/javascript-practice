let l1= [true, false, true];
let l2=[false, true, true];
let resultarray=[];
for(let i=0; i<l1.length;i++){
    result= l1[i]&&l2[i];
    resultarray+=result +",";
}
console.log(resultarray);

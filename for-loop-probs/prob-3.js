// let n=5;
// for(let i=1;i<=n; i++){
//    start= i*'*';
//    console.log(start);
// }


//triangle of stars

let n=5
for(let i=1; i<=n;i++){
    let row='';
    for(let j=1;j<=i; j++){
        row+='*';
    }
    console.log(row);
}

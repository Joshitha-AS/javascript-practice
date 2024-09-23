function printMultiplicationTable(n){
    let multiply=0;
    let resu
   for(r=n;r>0;r--){
        multiply=n*r;
       console.log(n+"*"+r+"=" +multiply)
   }
  
}
let n=6
printMultiplicationTable(n);
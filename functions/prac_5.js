let i = 1;
let tabord=4;   //table order 
function tables(i,tabord){
    while(i<=12){
        if(i%2===1){
              let table= i* tabord;
              console.log(i+"*"+tabord +"="+ table);
          }
          i++;
          
    }
}

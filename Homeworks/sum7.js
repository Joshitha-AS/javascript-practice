//earliest depature

let train_departures=[10,15,7,20,5];
let temp=10;
for(let i=0;i<train_departures.length;i++){
       if(train_departures[i]<temp){
        temp=train_departures[i];
       }
}
console.log(temp);

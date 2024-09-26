let seats = [1,0,1,1,0,0,0,0,1];
let len= seats.length;
let temp=seats[0];
let count=0;
for(let i=0;i<len;i++)
  if(seats[i]===0){
    count++;
}
console.log(`number of seats available are ${count}`);
for(i=seats.length;i>0;i--){
  console.log(seats[i]);
}
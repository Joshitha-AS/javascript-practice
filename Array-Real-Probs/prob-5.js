//Create an array of old prices for 4 items and another array with the new prices.
// Write a program to calculate and print the percentage increase for each item.
let oldprices=[30,50,200,70];
let newprice=[60,100,400,140];
let sum1=0;
let sum2=0;
let increase=0;
let per1=0;
let per2=0;
for(i=0;i<oldprices.length;i++){
    sum1+=oldprices[i];
    per1=(sum1/oldprices.length)*100;
    sum2+=newprice[i];
    per2=(sum2/newprice.length)*100;
   
}
console.log(per1);
console.log(per2);
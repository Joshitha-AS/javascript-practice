//even numbers 
function printevennumbers(n){
    let i=2;
    while (i<=n){
        console.log(i);
        i+=2;
      }
    
}
let n=30
printevennumbers(n);



function totalExpenses(expenses) {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
      total += expenses[i];
    }
    return total;
  }
  
  const weeklyExpenses = [50, 30, 45, 20, 60, 40, 25];
  const total = totalExpenses(weeklyExpenses);
  console.log(`Total expenses for the week: $${total}`);
  


let scores=[90,95,85,99,70];
let sum=0;
let avg=0;
let len=scores.length;
for(i=0;i<len;i++){
    sum+=scores[i];
    avg=sum/len;
}
console.log(avg);

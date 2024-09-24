function sumnumbers(n){
    let sum=0;
    let i=1;
    while(i<=n){
        sum+=i;
        i++; 
    }
    return sum;
}
let result=sumnumbers(10)
console.log(result);


//prob2//
function calculateFactorial(n){
    let i=1;
    let factorial=1;
    while(i<=n){
        factorial*=i;
        i++;
    }
    return factorial;
}
let result1=calculateFactorial(5);
console.log(result1);

calculateArea();
greetUser();

function calculateArea() {
 const radius = 5;
 var area = Math.PI * radius * radius;
 console.log(area);
}
function greetUser() {
 var userName = "John";
 console.log(userName);
}



//prob3
let count = 1;
while (count <=100) {
 console.log("Counting down: " + count);
 count = count + 1;
}



//prob4
let temperature = 30;
if (temperature >=0) {
    console.log("It's cold outside.");
   } else {
    console.log("It's warm outside.");
   }

//prob5

function checkNumber(num) {
  if (num > 0){
    console.log("positive");
  }else if (num < 0) {
    console.log("negative");
  } else {
    console.log("Zero");
  }
}
checkNumber(10, 20);

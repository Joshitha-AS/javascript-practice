//1.Average of Scores
// Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.
let scores=[90,78,89,89,100];
sum=0;
scores.forEach((add)=>sum+=add)
console.log(Math.trunc(sum/scores.length)+"%");

//2.Finding Maximum Score
// You have an array of test scores for 7 students. Write a program to find and print the highest score using the Math.max() function along with the spread operator.

let studentscores=[90,78,89,89,100,78,83];
let maximum=Math.max(...scores);
console.log(maximum);

//3.Number System Conversion
// Write a program that stores an array of 3 decimal numbers. Convert each number to its binary equivalent using the toString(2) method and print the binary values.

let decimal=[3,5,15];
for(let i=0;i<decimal.length;i++){
    let binary=decimal[i].toString(2);
    console.log("binary:"+decimal[i]+":"+binary);
}

//4.Boolean Algebra (AND Operation)
// Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]). Perform an AND operation on corresponding elements from both arrays and store the result in a new array. Print the resulting array.

let array1=[true, false, true];
let array2=[false, true, true];
result=[];

for(let i=0;i<array1.length;i++){
    result[i]=array1[i]&&array2[i];
}
console.log(result);


//5.Percentage Increase in Prices
// Create an array of old prices for 4 items and another array with the new prices. Write a program to calculate and print the percentage increase for each item.

let price1=[34,56,78];
let price2=[56,78,90];
let increase=[];
for(let i=0;i<price1.length;i++){
    let calculate=price2[i]-price1[i];
    let percentage=Math.trunc((calculate/price1[i])*100);
    increase[i]=percentage;
    
}
console.log(increase);

//6.Set Theory (Union of Two Sets)
// Write a program that takes two arrays of numbers representing two sets. Create a new array that represents the union of both sets (without duplicates) and print the result.

let set1=[1,2,3];
let set2=[2,3,4];

let union=[...new Set([...set1,...set2])];
console.log(union);


//7.Finding the Mode (Most Frequent Element)
// Write a program to find and print the mode (the number having the highest count) in an array of 10 numbers. If there are multiple modes, print any one of them.

array=[2,3,4,2,6,4,5,5,6,2];
let sum1=[];
let sum2=[];
let num=0;
for(let i=0; i<array.length; i++){
 num = sum1.indexOf(array[i]);
 if(num !== -1){
     sum2[num]++;
 }
 else{
     sum1.push(array[i]);
     sum2.push(1);
 }
}
let maxvalue=0;
for(let j=0; j<sum2.length; j++){
    if(sum2[j] > sum2[maxvalue]){
        maxvalue=j;
    }
}
console.log(sum1[maxvalue]);

//8.Modulus Operation for Time Calculation
// Create an array of times (in minutes) that different tasks take to complete. Write a program to find out how many full hours and leftover minutes each task takes using modulus (%) and division (/) operators, and save the result in the same array. Print the array.

let time = [90, 150, 45, 120, 200];

for(let i=0;i<time.length;i++){
  let hours=Math.floor(time[i]/60);
  let minutes=time[i]%60;
  time[i]=hours+"Hour "+minutes+" Minutes";
 
}
 console.log(time);


 //9.Simple Interest Calculation
//Create an array of 10 objects with keys principal, rateOfInterest and noOfYears. Find the simple interest for each array object and store it in a new array. Print this array. 
details = [
{ principal : 10000, rateOfInterest : 5, noOfYears: 4},
{ principal : 15000, rateOfInterest : 4, noOfYears: 3},
]
Output:
[ 2000, 1800 ]


let details = [
  { principal: 10000, rateOfInterest: 5, noOfYears: 4 },
  { principal: 15000, rateOfInterest: 4, noOfYears: 3 },
  { principal: 20000, rateOfInterest: 6, noOfYears: 5 },
  { principal: 25000, rateOfInterest: 3, noOfYears: 2 },
  { principal: 30000, rateOfInterest: 7, noOfYears: 6 },
  { principal: 12000, rateOfInterest: 5.5, noOfYears: 4 },
  { principal: 18000, rateOfInterest: 4.5, noOfYears: 3 },
  { principal: 22000, rateOfInterest: 6.2, noOfYears: 5 },
  { principal: 16000, rateOfInterest: 5, noOfYears: 4 },
  { principal: 13000, rateOfInterest: 4, noOfYears: 2 },
];


let simpleinterests=[];

for(let i=0;i<details.length;i++){
 let {principal,rateOfInterest,noOfYears}=details[i]
  let si=(principal*rateOfInterest*noOfYears)/100;
  simpleinterests.push(si);
  
}
console.log(simpleinterests);

//10.Calculating Total Marks of Students 
// You have an array of 10 objects, each representing a student with keys subject1Marks, subject2Marks, and subject3Marks. Write a program to calculate the total marks for each student and store them in a new array. Print the new array.


 let student = [
  { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
  { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
  { subject1Marks: 75, subject2Marks: 85, subject3Marks: 80 },
   { subject1Marks: 90, subject2Marks: 95, subject3Marks: 100 },
   { subject1Marks: 55, subject2Marks: 60, subject3Marks: 58 },
   { subject1Marks: 70, subject2Marks: 75, subject3Marks: 80 },
   { subject1Marks: 85, subject2Marks: 90, subject3Marks: 88 },
   { subject1Marks: 45, subject2Marks: 50, subject3Marks: 55 },
   { subject1Marks: 100, subject2Marks: 95, subject3Marks: 90 },
    { subject1Marks: 78, subject2Marks: 82, subject3Marks: 76 },
  
  ]
  
  let totalMarks=[];
  
  for(let i=0;i<students.length;i++){
      let{subject1Marks,subject2Marks,subject3Marks}=student[i];
      let total=subject1Marks + subject2Marks + subject3Marks;
      totalMarks.push(total);
  }
  console.log(totalMarks); 

  //11.Calculating Total Monthly Expenses
// You have an array of 10 objects, each representing monthly expenses with keys rent, groceries, and utilities. Write a program to calculate the total monthly expense for each object and store it in a new array. Print the new array.


let expenses = [
  { rent: 1000, groceries: 500, utilities: 200 },
  { rent: 800, groceries: 400, utilities: 150 },
  { rent: 1200, groceries: 600, utilities: 300 },
  { rent: 950, groceries: 350, utilities: 250 },
  { rent: 1100, groceries: 450, utilities: 100 },
  { rent: 700, groceries: 300, utilities: 200 },
  { rent: 1300, groceries: 700, utilities: 400 },
  { rent: 900, groceries: 450, utilities: 180 },
  { rent: 1000, groceries: 500, utilities: 250 },
  { rent: 750, groceries: 250, utilities: 100 },
];

let totalexpence=[];

for(let i=0;i<expenses.length;i++){
  let {rent,groceries,utilities}=expenses[i]
  let sum=rent + groceries + utilities;
  totalexpence.push(sum);
  
}
console.log(totalexpence);
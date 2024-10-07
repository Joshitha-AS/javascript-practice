// let nam= "joshitha";
// let n= nam.split("");
// console.log(n);
// let count=0;
// for(let i=0; i< n.length; i++){
//     if(n[i]=='a'||n[i]=='e'|| n[i]=='i'|| n[i]=='o'|| n[i]=='u' ){
//        count++;
//     }
// }
// console.log(count);


// let num= 123456;
// digitsum=0;
// while(num>0){
//  digitsum+= num%10;
//  num= Math.floor(num/10);   
// }



// let arr=["cat","dog", "camel", "dove"];
// let arr_2=["giraffe", "puppy"];
// let len= arr_2.length;

// for(let i=0; i< len; i++){
//     // let poped= arr.pop();
//     // console.log(poped);
//     arr.push(arr_2[i]);
    
// }
// console.log(arr);


// let obj= {
//     apple: 20,
//     orange: 50,
//     oiuyt: 56,
//     ghjk: 60
// }
// let val=Object.values(obj);
// let sumi= val.reduce((a,b)=> a+b);
// console.log(sumi);


// function checksamenum(arr){
//     let ord_arr=arr.sort((a,b) => a-b);
// for(let i=0; i< ord_arr.length; i++){
//     if(ord_arr[i]==ord_arr[i+1]){
//         return true;
//     }
// }
//  return false;
// }
// let arr=[12, 15, 11, 11, 20, 20];               
// if(checksamenum(arr)){
//    console.log(`the helicoper is landing in same time`)
// }
// else{
//     console.log(`the helicoper not landing in same time`)
// }

// let array=[12,45,72,5,46,90, 84,12,17,9];
// function evennum(array){
//     let eve_arr= array.filter((x)=>x%2==0 );
//     console.log(eve_arr);
// }

// evennum(array);

// cars = [
//     { brand: "Tata", model: "Nano" },
//     { brand: "Honda", model: "Civic" },

// ];
// let year=[2019, 2008];
// for(i=0; i<cars.length; i++){
//     cars[i].years= year[i];
// }
// console.log(cars)



// let students = [
//     { name: "Amar", grade: "A" },
//     { name: "Akbar", grade: "B" },
//     { name: "Anthony", grade: "A" },
//   ];
// let a =students.filter((x)=>x.grade=="A").map((s)=> s.name);
// // for(let i=0; i<a.length; i++){
// //     console.log(a[i].name);
// // }
// console.log(a);

// let products = [
//     { name: "Laptop", price: 800 },
//     { name: "Phone", price: 500 },
//   ]
// console.log(products.map((x)=> x.price).reduce((a,b)=> a+b));


// function multable(table_ord, limit){
//     for(let i=limit; i>0; i--){
//         let mul= i*table_ord;
//         console.log(`${i} * ${table_ord} = ${mul}`);
//     }
// }

// multable(6, 10);

// let digits=[];
// while(num>0){
//    let digit= num%10;
//    digits.unshift(digit);
//    num= Math.floor(num/10);
// }
// let sum=0;
// for(let i=0; i< digits.length; i++){
//     sum+=digits[i];
// }
// console.log(sum);


// let num= 2345;
// let str= num.toString();
// let strarr= str.split("");
// let sum=0;
// for(let i=0; i< strarr.length; i++){
//   sum+=strarr[i];
// }
// console.log(sum);

// let expenses = [
//     { rent: 1000, groceries: 500, utilities: 200 },
//     { rent: 800, groceries: 400, utilities: 150 },
// ];
// let res=[];
// for(let i=0; i< expenses.length; i++){
//     res[i]= expenses[i].rent+expenses[i].groceries+expenses[i].utilities;
   
// }
// console.log(res);


// let students = [
//     { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
//     { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
// ];
// let res= [];
// for(let i=0; i< students.length; i++){
//     res[i]=students[i].subject1Marks+ students[i].subject2Marks+students[i].subject3Marks;
// }
// console.log(res);

// let details = [
//     { principal : 10000, rateOfInterest : 5, noOfYears: 4},
//     { principal : 15000, rateOfInterest : 4, noOfYears: 3},
// ];

let arr=[1,2,3,4,5];
for(let i=0; i<arr.length; i++){
   console.log(arr[i]*arr[i])
}









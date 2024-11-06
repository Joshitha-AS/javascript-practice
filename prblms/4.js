// let a=[1,34,78,93,23];
// let maxi= Math.min(...a);
// console.log(maxi);
// console.log("==================");


// let arr=[23,5,7];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i].toString(2));
// }

// console.log("================");
// let a1= [true, false, true] ;
// let a2=[false, true, true];
// let ans=[];
// for(let i=0; i<a1.length; i++){
//   ans.push (a1[i] && a2[i]);

// }
// console.log(ans);

// console.log("=================");

// let arr1=[10,25,34,70]
// let arr2=[20,40,60,80]
// let array=[]
// for(i=0;i<arr1.length;i++){
//     let tol=arr2[i]-arr1[i];
//     array.push((tol/arr1[i])*100)
   

// }
// console.log(array);

// console.log("===========");
// let r=[1,2,3,4,5,6,6];
// let s=[1,3,6,4,9,78];
// let ans= (new set(...r,...s));
// console.log(ans);

// function sortWithoutSort(a){
//     for(let i = 0;i<a.length;i++){
//         for(let j = i+1;j<a.length;j++){
//             if(a[j]<a[i]){
//                 let temp = a[i];
//                 a[i] = a[j];
//                 a[j]=temp;
//             }
//         }
//     }
//     return a;
// }
// let array = [5,6,4,2,9,1,3]
// console.log(sortWithoutSort(array));

let num1=[1,2,3,3]
let num2=[4,4,5,6]
let num3=[]
let number=new Set([...num1,...num2])
let num4=Array.from(number)
// num3.push(number)
console.log(num4);


// function lcmof(a,b){
//     let num= a*b;
//     for(let i=1; i<=num; i++){
//         if(i%a ===0 && i%b===0){
//           return i;
//         } 
//     } 
// }
// let m= 12; 
// let n=36;
// console.log(lcmof(m,n));
//========================================//

// function fizzbuzz(n){
//     for(let i=0; i<=n; i++){
//         if(i%3===0 && i%5===0){
//             console.log("fizzbuzz");
//         }
//         else if(i%3===0){
//             console.log("fizz") ;
//         }
//         else if(i%5===0){
//             console.log("buzz") ;
//         }
//         else{
//             console.log(i) ;
//         }
//     }
// }
// let n=100;
// fizzbuzz(n);
//========================================//

// function isprime(n){
//     if(n<=1) return false;
//     if(n==2) return true;
//     for(let i=2; i<=Math.sqrt(n); i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }
//console.log(isprime(n));

// for(i=0; i<=20;i++){
//     if(isprime(i)==true){
//         console.log(i)
//     }
// }
//========================================//

// function hcfof(x,y){
//     while(y!==0){
//         let temp=y;
//         y= x%y;
//         x= temp;
//     }   
//     return x;
// }
// let x=48;
// let y=18;
// console.log(hcfof(x,y));
//let n="15";
// console.log(typeof(+n));
// let arr=[1,2,3,4,6,8]
/* let map_arr=arr.map(x=>x*x)
console.log(map_arr); */

// let sum_arr=arr.map(x=>arr.reduce((a,b)=>a+b))
// console.log(sum_arr);

// let even_arr=arr.filter(x=>x%2==0)
// console.log(even_arr);
//==========================================//

// prime-- 1 or num
// <=1
// 2 prime 

// function isPrime(n) {
//     if(n<=1) return "not prime"
//     if(n==2) return "prime"
//     for(let i=2;i<n;i++){  // 2,3,4
//         if (n%i==0) {
//             return "not prime"
//         }
//     }
//     return "prime"
// }
// console.log(isPrime(7));
// console.log(isPrime(49));
// console.log(isPrime(121));
// function isPrime(n) {
//     if(n<=1) return "not prime"
//     if(n==2) return "prime"
//     for(let i=2;i<=Math.sqrt(n);i++){  // 2,3,4
//         if (n%i==0) {
//             return "not prime"
//         }
//     }
//     return "prime"
// }
// console.log(isPrime(7));
// console.log(isPrime(49));
// console.log(isPrime(121));
// function isPrime(n) {
//     return n<=1?"not prime":n==2?"prime":[...Array(n).keys()].slice(2).some(x=>n%x==0)?"not prime":"prime"
// }
// console.log(isPrime(1191));

//=================================================//
// let str="arumugakani";
// let object={};
// for(let i=0;i<str.length;i++){
//     obj[str[i]]=(obj[str[i]]||0)+1;
// }
// let values=Object.values(obj)
// // console.log(values);
// let keys=Object.keys(obj);
// // console.log(keys);
// console.log(keys[values.indexOf(Math.max(...values))]);


// let num=12345;
// console.log(num.toString().split("").map(x=>(+x)));
// let num=5;
// console.log(num%2==0?num*2:num/2);
//  [...Array(n).keys()]
// console.log(Array(5).fill("gokul"));
// let n=8;
// console.log([...Array(n).keys()].slice(2));

// let obj={
//     name:"gokul",
//     age:18
// }
// obj.place="upt"
// console.log(obj.place);


// let arr=[1,3,5]
// console.log(arr.some(x=>x%2==0));
// let n="gv";
// console.log(n||0);
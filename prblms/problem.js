// let array= [23,78,144,99,12,85];
// let sortarr= array.sort((a,b)=>b-a);
// let len= sortarr.length;
// let diff= sortarr[0]-sortarr[len-1];
// // console.log(diff);

// function isoccuring(s1,s2){
//     let count=0;
//     let position= s1.indexOf(s2);
//     while(position!== -1){
//         count++;
//         position= s1.indexOf(s2, position+1)
//     }
//     return count;
// }
// let s1= " i am in the house in melbourn";
// let s2= "in";
// console.log(isoccuring(s1,s2));

// console.log(s1.split(s2).length-1);

//Given an array of integers, count how many numbers are even and how many are odd.
// function countof(el) {
//     let evencount = 0;
//     let oddcount = 0;
//     let len = el.length;
//     for (let i = 0; i < len; i++) {
//         if (i % 2 === 0) {
//             evencount++;

//         }
//         else {
//             oddcount++;

//         }
//     }
//     return `{evencount: ${evencount}, oddcount: ${oddcount}}`
// }
// let el = [23, 56, 41, 78, 9, 10, 30];
// console.log(countof(el));

// Given an array of integers and a target element,
// find the indices of its first and last occurrence.
// function occurrenceof(arr, target) {
//     let n = arr.length;
//     left = 0;
//     right = n - 1;
//     let middleindex = Math.floor((left + right) / 2);
//     while (right >= left) {
//         if (left > middleindex) {
//             right=middleindex - 1;
//         }
//         else if (right >= middleindex) {
//             left=middleindex + 1;
//         }
//         else{
//             return middleindex
//         }

//     }
   
// }
// let arr = [3, 4, 5, 1, 6, 7, 5, 10];
// console.log(occurrenceof(arr));

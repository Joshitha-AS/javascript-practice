// Given an array of Integers identify the maximum occurring element. Eg:
// /[5,5,4,1,1,1,6,7,8], answer is 1

// function reapet(a){
// var count1=0;
// for(i=0;i<a.length;i++){
//     var count=0;
//     for(j=i+1;j<a.length;j++){
//         if(a[i]==a[j]){
//             count++
//         }
//     }
//     if(count1<count){
//         count1=count
//         var ans=a[i]
//     }
// }
// console.log(ans,count1+1)
// }
// reapet([5,5,4,1,1,1,6,7,8])

//Given two string compare if one is a permutation of another
// example str1 = man str2 = nam
// output: true
// example str1=pear str2=reap output true
// example str1=fall str2=faal output false

// function permutation(str1,str2){
//     if(str1.length !== str2.length){
//         return invalid
//     }
//     string1= str1.split("").sort().join("")
//     string2= str2.split("").sort().join("") 
//     return string1===string2
// }
// console.log(permutation("pear","reap"))


// Given a sorted list with an unsorted number e in the rightmost cell,
//  can you write some simple code to insert into the array so that it remains sorted?
// And print each of the steps
// input
// insertionSort1([1,2,4,5,3])
// Output:
// 1 2 4 5 5
// 1 2 4 4 5
// 1 2 3 4 5

// function removeDuplicates(arr){
//     let res=[];
//     for(let i=0;i< arr.length; i++){
//         let isDuplicate=false;
//         for(let j=0;j< arr.length; j++){
//             if(arr[i] === arr[j]){
//                 isDuplicate=true;
//                 break;
//             }

//         }
//         if(!isDuplicate){
//             res.push(arr[i])
//         }
//     }
//     return res;
// }
// console.log(removeDuplicates([5,5,4,1,1,1,6,7,8]))

// function commonElements(a1, a2) {
//     let res = []
//     for (let i = 0; i < a1.length; i++) {
//         for (let j = 0; j < a2.length; j++) {
//             if (a1[i] === a2[j]) {
//                 let isDuplicate = false;
//                 for (let k = 0; k < res.length; k++) {
//                     if (a1[i] == res[k]) {
//                         isDuplicate = true;
//                         break;
//                     }
//                 }
//                 if (!isDuplicate) {
//                     res.push(a1[i])
//                 }
//             }
//         }
//     }
//     return res;
// }
// console.log(commonElements([5, 4, 1, 5, 6, 7, 8], [5, 12, 4, 5, 1, 3, 2]))   

// function noDuplicate(arr){
//     let n=arr.length;
//     let result=[]
//     for(let i=0; i<n; i++){
//         let isDuplicate=false;
//         for(let j=0; j<n; j++){
//             if(arr[i]=== result[j]){
//                 isDuplicate=true;
//                 break;
//             }
//         }
//         if(!isDuplicate){
//             result.push(arr[i])
//         }
//     }
//     return result;
// } 
// console.log(noDuplicate([5,5,4,1,1,1,6,7,8]))

// function intersectionOfArr(arr1,arr2){
//     let result=[];
//     for(let i=0; i< arr1.length; i++){
//        for(let j=0; j< arr2.length; j++){
//         let isDuplicate=false;
//         for(let k=0; k<result.length; k++){
//             if(arr1[i]===result[k]){
//                isDuplicate=true;
//                break;
//             }
//         }  
//         if(!isDuplicate){z  ``
//             result.push(arr1[i])
//         }
//        }
//     }
//     return result;
// }
// console.log(intersectionOfArr([5, 4, 1, 5, 6, 7, 8], [5, 12, 4, 5, 1, 3, 2]))   

//You are given an array, but you can only swap adjacent elements. Design an algorithm to sort the array in the minimum number of swaps. 
// **Hint:** This could involve bubble sort logic optimized for counting swaps.

function swapCountArr(arr){
    let n= arr.length;
    let swapCount=0
    
    for(let i=0; i<n-1; i++){
        let swapped= false;
        for(let j=0; j<n-1-i; j++){
            if(arr[j]> arr[j+1]){
                [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
                swapped=true;
                swapCount++;
            }
        }
        if(!swapped){
            break;
        }
    }
    return {swapCount,sortedArr: arr}
}
let result=swapCountArr([5, 4, 1,6, 7, 8])
console.log(result.swapCount)
console.log(result.sortedArr)


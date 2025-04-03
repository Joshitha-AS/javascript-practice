
// function shellSort(arr) {
//     var n = arr.length;
//     for (var gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
//         // Do a gapped insertion sort for this gap size.
//         for (var i = gap; i < n; i++) {
//             // add arr[i] to the elements that have been gap sorted
//             var temp = arr[i];
//             var j;
//             for (j = i; j >= gap && arr[j-gap] > temp; j -= gap)
//                 arr[j] = arr[j-gap];
 
//             // put temp (the original arr[i]) in its correct location
//             arr[j] = temp;
//         }
//     }
//     return arr;
// };


// function shellSort(arr){
//     let n= arr.length
//     for(let gap=Math.floor(n/2); gap>0; gap= Math.floor(gap/2)){
//         for(let i=0; i<n; i++){
//             let temp= arr[i]
//             let j=i;
//             for(let j=0; j<n; j++){
//                 while(j>= gap && arr[gap-j]>temp){
//                     arr[j]=arr[gap-j]
//                     j--;
//                 }
//             }
//             arr[j]=temp;
//         }
//     }
// }



// function shellSort(arr){
//     let n= arr.length
//     for(let gap= Math.floor(n/2); gap>0; gap= Math.floor(gap/2)){
//         for(let i=gap; i<n; i++){
//             let temp=arr[i]
//             let j=i;
//             while(j >= gap && arr[j - gap]>temp){
//                 arr[j]= arr[j-gap]
//                 j-=gap;
//             }
//             arr[j]= temp
//         }
//     }
//     console.log(arr)
// }
// shellSort([8,1,3,2,10,5])


// function shellSorting(arr){
//     let n= arr.length;
//     for(let gap=Math.floor(n/2); gap>0; gap= Math.floor(gap/2)){
//         for(let i=0; i<n; i++){
//             let temp=arr[i];
//             let j=i;
//             while(j>=gap && arr[j-gap]>temp){
//                 arr[j]=arr[j-gap]
//                 j-= gap;
//             }
//             arr[j]=temp;
//         }
//     }
//     return arr;
// }
// console.log(shellSorting([8,1,3,2,10,5])); 

sort-algorithms/practice-l5.js
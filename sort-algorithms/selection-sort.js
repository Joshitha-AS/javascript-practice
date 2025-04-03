// function selectionSort(arr){
//     let n= arr.length;
//     for(let i=0; i<n; i++){
//         let minIndex= i;
//         for(let j=i+1; j<n; j++){
//            if(arr[minIndex]> arr[j]){
//               minIndex=j
//            }
          
//         }
//         if(minIndex !== i){
//             [arr[i],arr[minIndex]]= [arr[minIndex], arr[i]]
//            }
       
//     }
//     return arr;
// }
// console.log(selectionSort([9,3,5,7,1,56,2]))
// console.log("======================================")

//Implement it for an array of Employee objects which has name, 
//age and salary. Sort it by Salary. Additional question, write a function which will sort the array of employee objects by a specific field. 


//implement the selection sort algorithm.Please print the each step of the algorithmIf the arr = [4,5,1,3,7]
// Output:
// 4 5 1 3 7
// 1 5 4 3 7
// 1 3 4 5 7
// 1 3 4 5 7
// 1 3 4 5 7

// function selectionSortEachRow(arr){
//     let n= arr.length;
//     for(let i=0; i<n; i++){
//         let minIndex=i;
//         for(let j=i+1; j< n; j++){
//             if(arr[minIndex]>arr[j]){
//                 minIndex=j;
//             }
//         }
//         if(minIndex!==i){
//             [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]
//         }
//     }
//     return arr;
// }
// console.log(selectionSortEachRow([8,1,9,7,6,2]))

// function matrixSort(matrix){
//     for(let row=0; row< matrix.length; row++){
//         let arr=matrix[row];
//         for(let i=0; i<arr.length; i++){
//             let minIndex=i;
//             for(let j=i+1; j<arr.length; j++){
//                 if(arr[minIndex]> arr[j]){
//                     minIndex=j;
//                 }
//             }
//             if(minIndex!==i){
//                 [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]
//             }
//         }
//     }
//     return matrix;
// }
// console.log(matrixSort([
//     [8, 1, 9],
//     [7, 6, 2],
//     [5, 3, 4],
// ]))

function sSort(arr){
    let n= arr.length;
    for(let i=0; i<n; i++){
        let minIndex=i;
        for(let j=i+1; j<n; j++){
            if(arr[minIndex]>arr[j]){
                minIndex=j;
            }
        }
        if(minIndex!==i){
            [arr[minIndex],arr[i]]=[arr[i], arr[minIndex]]
        }
    }
    return arr
}
console.log(sSort([9,3,5,7,1,56,2]))

//7. Rotate a List
//Rotate a list by a given number of positions

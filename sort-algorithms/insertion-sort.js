// function insertionSort(arr){
//     let n= arr.length;
//     for(let i=1; i< n; i++){
//         let key= arr[i];
//         let j= i-1;
//         while(j>=0 && arr[j]>key){
//             arr[i]= arr[j]
//             j--;

//         }
//         arr[j+1]=key
//     }
//     return arr;
// }
// console.log(insertionSort([9, 3, 7, 10, 4, 5]))

// //
// function objectInsertionSort(obj,key){
//     let n= obj.length;
//     for(let i=1; i<n; i++){
//         let keyElemnt= obj[i][key];
//         let j= i-1;
//         while(j>=0 && obj[j][key]> key>Elemnt){
//             obj[j+1][key]= obj[j][key];
//             j--;
//         }
//         obj[j+1][key]= keyElemnt
//     }
//     return obj
// }
// console.log(objectInsertionSort([
//     { name: "nlice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "mharlie", age: 20 },
//     { name: "ciana", age: 35 }
// ],"name"))


// function objectInsertionSort(obj,key){
//     let n= obj.length;
//     for(let i=1; i<n; i++){
//         let keyElement= obj[i][key];
//         let j= i-1;
//         while(j>=0 && obj[j][key]> keyElement){
//             obj[j+1][key]=obj[j][key];
//             j--;
//         }
//         obj[j+1][key]=keyElement;
//     }
//     return obj;
// }
// console.log(objectInsertionSort([
//          { name: "nlice", age: 81 },
//          { name: "Bob", age: 30 },
//          { name: "mharlie", age: 10 },
//          { name: "ciana", age: 35 }
//      ],"age"));
// function mostFrequency()
// }     


// function insertionSort1(arr){
//     let n= arr.length;
//     for(let i=1;i<n;i++){
//         let key=arr[i];
//         let j= i-1;
//         while(j>=0 && arr[j]>key){
//             arr[j+1]=arr[j]
//             j--;
//         }
//         arr[j+1]=key;
//     }
//     return arr;
// }
// console.log(insertionSort1([8,1,9,7,6,2]))

// function insort(arr){
//     let n= arr.lengt;
//     for(let i=1; i<n;i++){
//         let key= arr[i];
//         let j= i-1;
//         while(j>=0 && arr[j]>key){
//             arr[j+1]= arr[j]
//             j--;
//         }
//         arr[j+1]=key
//     }
//     return arr;
// }
// console.log(insort([8,1,9,7,6,2]));

function insertt(arrr){
    for(let i=1;i<arrr.length;i++){
        let key=arrr[i];
        let j= i-1;
        while(j >= 1 && arrr[j]>key){
            arrr[j+1]=arrr[j];
            j--;
        }
        arrr[j+1]=key;
    }
    return arrr
}
console.log(insertt([9,7,3,78,56]));
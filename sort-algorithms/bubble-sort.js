
// function bubbleSort(list){
//     let n= list.length;
//     for(let i=0; i< n; i++){
//     for(let j=0; j<n-i; j++){
//        if(list[j]>list[j+1]){
//         [list[j],list[j+1]]=[list[j+1], list[j]]
//        } 
//     }

// }
// return list; 
// }
// let list=[12,34,5,7,3,10];
// console.log(bubbleSort(list))


// function specificBubbleSort(arr,k){
//     let n= arr.length;
//     for(let i=0; i<k; i++){
//         for(let j=0; j<k-i-1; j++){
//             if(arr[j]> arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1], arr[j]]
//             }  
//         }
//     }
//     return arr;
// }
// console.log(specificBubbleSort([3, 1, 4, 2, 5], 3));


// function loopCountBS(array){
//     let count=0;
//     let n= array.length;
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n-i-1; j++){
//            count++
//         }
//     }
//     return count;

// }
// console.log(loopCountBS([4, 3, 2, 1]))


// function bubbleSortChar(word){
//     let n= word.length;
//     for(let i=0; i<= n; i++){
//       console.log(word[i])
//     }

// }
// let word="bubble";
// console.log(bubbleSortChar(word));

// function bubbleSort(list){
//     let n= list.length;
//     let isSwapped;
//     for(let i=0; i< n-1; i++){
//     isSwapped=false;
//     for(let j=0; j<n-i-1; j++){
//        if(list[j]>list[j+1]){
//         [list[j],list[j+1]]=[list[j+1], list[j]];
//         isSwapped=true;
//        } 
//     }
//     if(!isSwapped){
//         break;
//     }

// }
// return list;
// }
// let l=[12,34,5,7,3,10];
// console.log(bubbleSort(l))


// function bubbleSort2(a) {
//     let len = a.length;
//     let count=0
//     for (let k = 0; k < len; k++) {
//         for (let i = 0; i < len; i++) {
//             count++;
//             for (let j = i + 1; j < len; j++) {
//                 if (a[i] > a[j]) {
//                     [a[i],a[j]]= [a[j],a[i]]
//                 }
//             }
//         }
//         break;

//     }
//     console.log(a)
    

// }
// bubbleSort2([12,34,5,7,3,10])


// function ascBubbleSort(a){
//     let len= a.length;
//     let isSwapped;
//     for(let i=0; i< len-1; i++){
//         isSwapped=false;
//         for(let j=i+1; j< len -1; j++){
//             if(a[i]> a[j]){
//                 [a[i],a[j]]= [a[j],a[i]]
//             }
//         }
//     }
//     return a;
// }
// console.log(ascBubbleSort([4,5,1,9,6,3,0]))

// function objectBubbleSort(people, key){
//     let n=people.length;
//     let isSwapped;
//     for(let i=0; i< n-1; i++){
//        isSwapped= false;
//         for(let j=0; j< n-i-1; j++){
//             if(people[j][key].toLowerCase()> people[j+1][key].toLowerCase()){
//                 [people[j],people[j+1]]=[people[j+1],people[j]]
//                 isSwapped=true;
//             }
//         }
//         if(!isSwapped){
//            break;
//         }
//     }
//     return people
   
// }

// for (let j = 0; j < n - i - 1; j++) {
//     if (people[j][key].toLowerCase() > people[j + 1][key].toLowerCase()) {
//         // Correct swap logic
//         [people[j], people[j + 1]] = [people[j + 1], people[j]];
//         isSwapped = true;
//     }
// }



// let people = [
//     { name: "nlice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "mharlie", age: 20 },
//     { name: "ciana", age: 35 }
// ];

// console.log(objectBubbleSort(people, "name"));




// function bs(arr){
//     let n= arr.length;
//     for(let i=0; i<n-1; i++){
//         let isSwapped=false;
//         for(let j=0; j<n-i-1; j++){
//             if(arr[j]> arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
//                 isSwapped=true;
//             }
//         }
//         if(!isSwapped){
//             break;
//         }
//     }
//     return arr;
// }
// console.log(bs([8,1,9,7,6,2]))

function bubble(arr){
    let isSwapped;
    let n= arr.length;
    for(let i=0; i<n; i++){
        isSwapped=false;
        for(let j=0; j< n-i-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                isSwapped=true
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return arr
}
console.log(bubble([8,1,9,7,6,2]))
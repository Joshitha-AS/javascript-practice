//Merge Two Sorted Arrays:
function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let mid= Math.floor(arr.length/2);
    let left= mergeSort(arr.slice(0,mid));
    let right= mergeSort(arr.slice(mid));
    return merge(left,right);
}
function merge(left,right){
    let sortedArr= [];
    while(left.length && right.length){
        if(left[0]< right[0]){
            sortedArr.push(left.shift());
        }
        else{
            sortedArr.push(right.push());
        }
    }
    return [...sortedArr,...left ,...right]
}

console.log(mergeSort([1, 3, 5],[2, 4, 6,9]))


// ///rotate arr

// function rotateArr(arr){
//     firstEle= arr[0];
//     for(let i=0; i<arr.length; i++){
//         arr[i]=arr[i+1]
//     }
//     arr[arr.length-1]=firstEle;
//     return arr;
// }


// let s= "07:05:45PM";
// console.log(s.length)
// let timeCheck="";
// console.log(s.slice(-2))
// console.log(timeCheck)


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}
function mergedArrayRecursive(left, right) {
    let sortedLeft = quickSort(left);
    let sortedRight = quickSort(right);
    return merge(sortedLeft, sortedRight);
}
let res = mergedArrayRecursive([4, 2, 3, 1,9,13], [8, 6, 7, 5]);
console.log(res);

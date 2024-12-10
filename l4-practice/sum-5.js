// //Write a program to find the longest substring in a string that doesn’t contain any repeating characters.
// //Input: "abcabcbb"

// function substringNoRepeatLen(str){
//   let maxLength= 0;
//   let currentStr=[];
//   for(let char of str){
//     while(currentStr.includes(char)){
//         currentStr.shift(char);
//     }
//     currentStr.push(char);
//     maxLength= Math.max(maxLength,currentStr.length)
//   }
//   return maxLength;
// }
// let str="abcabcbb"
// console.log(substringNoRepeatLen(str));


//Write a program to compress a string using counts of repeated characters.
//Input: "aaabbcc"

// function compressChar(str){
//     let lastChar="";
//     let count=1;
    
//     for(let i=1; i<=str.length;i++){
//         if(str[i] === str[i-1]){
    
//             count++;
//         }
//         else{
//             lastChar+= str[i-1]+ count;
//             count=1;
//         }
//     }

//     lastChar+= str[str.length-1]+count;
//     return lastChar;
// }
// console.log(compressChar("aaabbcc"));


// function compressStr(str){

// }

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
    
//     while (left < right) {  
//       let mid = Math.floor((left + right) / 2);
      
//       if (arr[mid] === target) {
//         return mid;
//       } else if (arr[mid] <= target) {
//        left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
    
//     return -1;  
//   }

//   let arr=[1,2,3,4,5,6,7,9]
//   let t= 6;
//   console.log(binarySearch(arr,t))

// function isAnagram(str1,str2){
//     let cStr1= str1.toLowerCase();
//     let cStr2= str2.toLowerCase();
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let sorted1= cStr1.split("").sort().join('');
//     let sorted2= cStr2.split("").sort().join('');
//     return sorted1=== sorted2;
// }
// console.log(isAnagram('listen', 'silent'));

function removeDuplicates(array){
   let unique=[];
   for(let i=1; i<array.length; i++){
    if(!unique.includes(array[i])){
        unique.push(array[i]);
    }
   }
   return unique;
}
console.log(removeDuplicates([1,1,3,2,6,6,6,7,8,9]));

function longestSubstringNoRep(str){
  let maxLength=0;
  let unique=[];
  for(let char of str){
    while(unique.includes(char)){
      unique.shift()
    }
    unique.push(char);
    maxLength=Math.max(maxLength, unique.length)
  }
  return maxLength;
}
console.log(longestSubstringNoRep("bbbb"));

function compressStr(str){
  let compress="";
  count=1;
  for(let i=0; i<str.length; i++){
    if(str[i]=== str[i+1]){
       count++;
    }
    else{
      compress += str[i]+ count;
      count=1; 
    }
  }
  return compress;
}
console.log(compressStr("aaabbc"));

// Reverse the order of characters in each word of a
// sentence while keeping the words in their original order.
// function reverseEachWords(sent){
//     return sent.split(" ").
//     map(word=> word.split("").reverse().join("")).join(" ");

// }
// console.log(reverseEachWords("hello world")); 


//=====================================================================================//
//Return a list where each element is the cumulative sum of elements in the input list.
//Input: [1, 2, 3, 4]
//Output: [1, 3, 6, 10]
// function cumulativeSum(list){
//     let res=[];
//     let sum=0;
//     for(let i=0; i<=list.length-1; i++){
//         sum+=list[i];
//         res.push(sum)
//     }
//     return res;
// }
// console.log(cumulativeSum([1, 2, 3, 4]));
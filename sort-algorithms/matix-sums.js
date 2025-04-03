// function matrixAddition(arr1,arr2){
//     if(arr1.length !== arr2.length && arr1[0].length!==arr2[0].length){
//         return invalid;
//     }
//     let res=[];
//     for(let i=0; i< arr1.lengtha ; i++){
//         let row = [];
//         for(let j=0; j<arr1.length; j++){
//             row.push(arr1[i][j]+arr2[i][j])
//         }
//         res.push(row)
//     }
//     return res;
// }
// const arr1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const arr2 = [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1]
// ];
// console.log(matrixAddition(arr1,arr2))

// function matrixMultiplication(m1,m2){
//     if(m1[0].length !== m2.length){
//         return invalid
//     }
//     let res=[];
//     for(let i=0; i<m1.length; i++){
//         let row=[];
//         for(let j=0; j<m2[0].length; j++){
//             let sum=0;
//             for(let k=0; k<m2.length; k++){
//                 sum+=m1[i][k]*m2[k][j]
//             }
//             row.push(sum)
//         }
//         res.push(row)
//     }
//     return res
// }

// const arr1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const arr2 = [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1]
// ];
// console.log(matrixMultiplication(arr1,arr2))
// function compareTriplets(a, b) {
//     let apoints=0;
//     let bpoints=0;
//     res=[];
//     for(let i=0; i<a.length; i++){
//         if (a[i]>b[i]){
//            apoints++;   
//         }
//          if(a[i]<b[i]){
//             bpoints++;
//          }
         
//     }
//     res.push(apoints,bpoints)
//     return res
// }
// console.log(compareTriplets( [1, 2, 3], [3, 2, 1]))

// function sumOfDigonals(arr){
//     let sumRight=0
//     let sumLeft=0
//     for(let i=0; i< arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(i==j){
//                sumRight+=arr[i][j]
//             }
//             if(i+j=== arr.length-1){
//                 sumLeft+=arr[i][j]
//             }
//         }
//     }
//     console.log(Math.abs(sumRight-sumLeft))
// }
// sumOfDigonals([[1,2, 3],
//     [4, 5, 6],
//     [9, 8, 9 ]]);


function matrixMul(m1,m2){
    if(m1.length !== m2[0].length){
        return "could not check"
    }
    res=[];
    for(let i=0; i< m1.length; i++){
        let row=[];
        for(let j=0;j< m2[0].length; j++){
            sum=0;
            for(let k=0; k< m2.length; k++){
                sum+= m1[i][k]*m2[k][j];
            }
            row.push(sum)
        }
        res.push(row)
    }
    return res;
}
const arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const arr2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];
console.log(matrixMul(arr1,arr2))

//Find the Longest Word in a Sentence
//Write a function to find the longest word in a given sentence.

//Input: "The quick brown fox jumped over the lazy dog"
//Output: "jumped"

function longestWord(sent){
    let n= sent.length;   
    let words= sent.split(" ");
    let longestWord="";
    for(let word of words){
        if(word.length> longestWord.length){
           longestWord=word;
        }
    }
    console.log(longestWord)
}
longestWord("The quick brown fox jumped over the lazy dog")


//String Compression
//Implement basic string compression using counts of repeated characters.
//Input: "aaabbccc"
//Output: "a3b2c3"

function stringCom(str){
    let n= str.length;
    let count=1;
    let compressed=''
     for(let i=0;i<n; i++){  
        if(str[i]===str[i+1]){
            count++
        }
        else{
            compressed+=str[i]+count
            count=1
        }
     }
    return compressed.length< str.length? compressed:str;
}
console.log(stringCom("aaabbdccc"))

//Remove Duplicate Characters
//Remove all duplicate characters from a string.

//Input: "programming" //Output: "progamin"

function removeDuplicateLetters(str){
    let len= str.length;
    let unique=new Set();
    let result='';
    for(let i=0; i<len; i++){
        for(let j=0; j< len; j++){
            if(!unique.has(str[i])){
                unique.add(str[i])
                result+=str[i]; 
            }
        }
    }
    return result;
}
console.log(removeDuplicateLetters("programming"))

//Write a function to check if two strings are anagrams (contain the same characters in a different order).
//Input: "listen", "silent" ,Output: true

function anagram(str1,str2){
    let sort_str1= str1.split("").sort().join("")
    let sort_str2= str2.split("").sort().join("")
    return sort_str1===sort_str2
    
}
console.log(anagram("listenin", "silent"))


//Write a function to sort the characters in a string alphabetically.
//Input: "javascript" ,Output: "aacijprstv"

function sortLetters(string){
    
    let strList= string.split("")
    let n= strList.length;
    for(let i=0; i< n-1; i++){
        let isSwap=false;
        for(let j=0; j< n-i-1; j++){
            if(strList[j]>strList[j+1]){
                [strList[j],strList[j+1]]=[strList[j+1],strList[j]]
                isSwap=true;
            }
        }
        if(!isSwap){
            break
        }
    }
    return strList.join("");
}
console.log(sortLetters("javascript"));

//Write a function to count how many times a specific substring appears in a string.
// Input: "hellohellohello", "hello"  Output: 3

function substringCount(str,sub){
    let n=str.length;
    let position= str.indexOf(sub);
    while(position !== -1){
        count++;
        position= str.indexOf(sub, position+sub.length)
    }
    return count;

}
substringCount("hellohellohello")


//Write a function to calculate the sum of all numbers 
// in an array that are greater than a given threshold.

function numberSums(arr, tar){
    let sum=0;
    
}
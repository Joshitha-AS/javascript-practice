// //capitalize first letter
// function capitalizeFirstLetter(str){
//     let strarr= str.split(" ");

//     for(let i=0; i<strarr.length; i++){
//         strarr[i]=strarr[i][0].toUpperCase()+ strarr[i].slice(1)
//     }
//     return strarr.join(" ")
// }
// console.log(capitalizeFirstLetter("hello world"))       

// //frequecy of characters
// function frequecyOfChar(str){
//     let freq={};
//     let newStr=str.trim()
//     for(let char of newStr){
//         if(freq[char]){
//             freq[char]++;
//         }
//         else{
//             freq[char]=1;
//         }
//     }
//     return freq;
// }
// console.log(frequecyOfChar("hello world"))


// //rotate a string
// function rotateStr(){}

// function firstNonRepChar(str){

//     let freq=0;
//     let res={};
//     for(let char of str){
//        if(!res[char]){
//          res[char]=1;
//        }
//        else{
//         res[char]++;
//        }
//     }
//     for(let char of str){
//         if(res[char]===1){
//             return char;

//         }
//     }
// }
// console.log(firstNonRepChar("swwiss"));

// function removeDup(str){
//     let newStr="";

//     for(let char of str){
//         if(!newStr.includes(char)){
//             newStr+=char
//         }
//     }
//     return newStr;
// }
// console.log(removeDup("programming"))


// function mostFreqChar(str){
//     let maxFreq=0;
//     let charCount={};
//     for(let char of str){
//         if(charCount[char]){ 
//             charCount[char]++;
//         }else{
//             charCount[char]=1
//         }
//     }
//     for(char of str){
//         if(charCount[char]> maxFreq){
//             maxFreq=charCount[char]
//         }
//     }
//     return maxFreq;
// }
// console.log(mostFreqChar("preechieng"))

// function substring(str){
//     let substrings=[];
//     for(let i=0; i< str.length; i++){
//         for(let j=i+1; j< str.length; j++){
//             substrings.push(str.slice(i,j))
//         }
//     }
//     return substrings;
// }
// console.log(substring("abcabcbb"))

// function longSubstringFreq(str){
//     let seen=new Set();
//     let left=0;
//     let maxFreq=0;
//     for(let right=0; right< str.length; right++){
//         while(seen.has(str[right])){
//             seen.delete(str[left]);
//             left++;
//         }
//         seen.add(str[right]);
//         maxFreq= Math.max(maxFreq, right-left+1)
//     }
//     return maxFreq;
// }
// console.log(longSubstringFreq("abcabcbb"))

// function longSubstring(str){
//     let left=0;
//     let maxFreq=0;
//     let seen=new Set();
//     let startIndex=0;
//     for(let right=0; right< str.length; right++){
//         while(seen.has(str[right])){
//             seen.delete(str[left]);
//             left++;
//         }
//         seen.add(str[right]);
//         if(right-left+1 > maxFreq){
//             maxFreq=right-left+1;
//            startIndex= left;
//         }
//     }
//     return str.slice(startIndex, startIndex+maxFreq)
// }
// console.log(longSubstring("abcabcbb"))


//String Compression
// function stringComp(str){
//     let compStr="";
//     let count=1;
//     for(let i=0; i<str.length; i++){
//         if(str[i]===str[i+1]){
//             count++;
//         }else{
//             compStr+= str[i]+count;
//             count=1
//         }
//     }


//     return compStr;
// }
// console.log(stringComp("aaabbccc"))

//Multiply Two Large Numbers Represented as Strings
// function mulStr(s1,s2){
//     let a = Number(s1);
//     let b = Number(s2);
//     return a*b;

// }

// console.log(mulStr("123","456"));


function lcmof(a,b){
    let max= Math.max(a,b);
    while(true){
        if(max%a===0 && max%b===0){
            return max;
        }
        max++;
    }
}
console.log(lcmof(4,6));

function gcdof(a,b){
    while(b){
        [a,b]=[b, a%b];
    }
    return a;
}

// function flattenArr(arr){

// const flatArray = arr.toString().split(',').map(Number);

// console.log(flatArray); 
// }
// flattenArr( [1, [2, [3, 4], 5], 6])


//revrese array words
// function revreseEle(arr){
//     let n= arr.length;
//     let revArr=[];
//     for(let char of arr){
//        let revStr="";
//        for(let i=char.length-1; i>=0 ; i--){
//         revStr+=char[i]
//        }
//        revArr.push(revStr)
//     }
//     return revArr;
// }
// console.log(revreseEle(["hello", "world", "javascript"]))

// function sortValuesOfObj(array) {
//     let n = array.length;
//     let names = []
//     for (obj of array) {
//         names.push(obj.name)
//     }
//     for (let i = 0; i < names.length; i++) {
//         for (let j = 0; j < names.length - i - 1; j++) {
//             if (names[j] > names[j + 1]) {
//                 [names[j], names[j + 1]] = [names[j + 1], names[j]]
//             }
//         }
//     }
//     return names;
// }
// console.log(sortValuesOfObj([{ name: "Bob" }, { name: "Alice" }, { name: "Charlie" }]));


// //nput: [{sentence: "hello world hello"}]
// //Output: { hello: 2, world: 1 }

// function wordCountInObj(arr) {
//     let wordCount = {};
//     let count = 1;
//     for (let obj of arr) {
//         let sent = obj.sentence;
//         let sentArr = sent.split(" ");
//         for (let word of sentArr) {
//             if (wordCount[word]) {
//                 wordCount[word]++;
//             } else {
//                 wordCount[word] = 1;
//             }

//         }
//     }

//     return wordCount;
// }
// console.log(wordCountInObj([{ sentence: "hello world hello" }]))


// function lcmOfArr(a){
//     for(let num of a){
//         let max=Math.max(...a);
//         while(true){
//             if(max%num===0){
//                 return max;
//             }
//             max++;
//         }

//     }
// }
// console.log(lcmOfArr([3,6,9]))


function breakingRecords(scores) {
    let min=scores[0];
    let max=scores[0];
    let maxCount=0;
    let minCount=0;
    for(let score of scores){ 
        if(score > max){
            max= score; 
            maxCount++;
        }  
    }
    
     for(let score of scores){
        if(score < min){
            min= score; 
            minCount++;
        }  
    }
    return [maxCount,minCount]

}

console.log(breakingRecords([10,5,20,20 ,4,5,2, 25, 1]))
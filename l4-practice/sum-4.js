// // function printStar(n) {
// //     for(let i = 1; i <= n; i++) {
// //         let output = getSpaces(n - i);
// //         let pattern = getNumSequence(i);
// //         console.log(output + pattern);

// //     }

// //     // Reverse print
// //     for(let i = n - 1; i >=1; i--) {
// //         let output = getSpaces(n - i);
// //         let pattern = getNumSequence(i);
// //         console.log(output + pattern);
// //     }

// // }

// // function getSpaces(n) {
// //     let outputStr = "";
// //     for(let i = 1; i <= n; i++) {
// //         outputStr += " ";
// //     }
// //     return outputStr;
// // }

// // function getNumSequence(n) {
// //     let outputStr = "";
// //     for(let i = 1; i <= n; i++) {
// //         outputStr += i + " ";
// //     }
// //     return outputStr;
// // }
// // console.log(printStar(5));

// // function vowelCount(s){
// //     let vowels= new Set(['a','e','i','o','u']);
// //     let disVowels= new Set();
// //     for(let char of s){
// //     if(vowels.has(char)){
// //         disVowels.add(char);
// //     }
// //     }
// //     return disVowels.size;
// // }
// // let s= "coolers"
// // console.log(vowelCount(s));

// // function calculateTotal(arr){
// //     let prices={'M':500,'J':3000,'T':1500, 'P':10};
// //     let total=0;
// //     arr.forEach(element => {
// //         let [code,quantity]= element.split(' ');
// //         total+=prices[code]*parseInt(quantity,10);
// //     });
// //     return total;
// // }
// // const arr = ["M 3", "J 1", "T 2"];
// // console.log(calculateTotal(arr));

// //Write a function to count the number of distinct consonants in a given string.
// // Consider all inputs to be lowercase and ignore non-alphabetic characters.

// // function distinctConsonants(str){
// //     // let count=0;
// //     let vowels= new Set(['a','e','i','o','u']);
// //     let setVal= new Set();
// //     for(let char of str){
// //         if(/[a-z]/.test(char) && !vowels.has(char)){
// //          setVal.add(char);   
// //         }
// //     }
// //     return setVal.size;
// // }
// // console.log(distinctConsonants("hello world"));

// //Given a string of words separated by spaces, 
// //find the longest word that does not contain any repeated characters. 
// function longestNotREpeated(str){
//     const words= str.split(" ");
//     function uniqueWords(word){
//        let uniqueWord= new Set();
//        for(let char of word){
//           if(uniqueWord.has(char)){
//             return false;
//           }
//           uniqueWord.add(char)
//        }
//        return true;
//     }
//     let longest="";
//     for(let word of words){
//         if(longestNotREpeated(word) && word.length> longest.length){
//             longest=word;
//         }

//     }
//     return longest;

// }
// console.log(longestNotREpeated("hi i am joshitha"));



// function factor(n){
//     let factorial=1;
//     for(i=1;i<=n;i++){
//         factorial*=i;
//     }
//     return factorial;
// }
// console.log(factor(5));

// function disVowels(str){
//     let vowel = "aeiou"
//     let distinctvowel=""
//     for(let char of str){
//         if(vowel.)
//     }
// }

// let data = ["Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000"]

// //     let max = 0;
// //     let maxE = ""; // Declare maxE in the appropriate scope

// //   let a = data[0];
// //   let b = data[1];
// //   let c = data[2];

// //   console.log(a,b,c);


// //    let max = Math.max(...str);
// //    console.log(max)
// //}
  
// function findmax(data) {
   
//     let maxRecord = data[0].split(",");
//     let maxName = maxRecord[0];
//     let maxSalary = maxRecord[2];

//     for (let i = 0; i < data.length; i++) {
//       let record = data[i].split(",");
//       console.log(record)
//       let name = record[0];
//       let salary = parsefloat(record[2]);
  
//       if (salary > maxSalary) {
//         maxSalary = salary; 
//         maxName = name;     
//       }
//     }
  
//     console.log(`${maxName}`);
//   }
       
    

// findmax(data)


// function findMaxSalaryEmployee(data){
//   let maxSal= 0;
//   let maxSalEmployee= "";
//   for(let str of data){
//     let [name,age,salary]= str.split(',');
//     let numsal= parseInt(salary)
//     if(numsal> maxSal){
//       maxSal=salary;
//       maxSalEmployee= name;
//     }
//   }
//   console.log(maxSal);
// }
// findMaxSalaryEmployee([ "Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000" ])

// // Return the name of the employee whose salary is closest to the average salary.
// function closeToAvg(data){
//   let expSal= 0;
//   let maxSalEmp= "";
//   let salaries=[];
//   for(let str of data){
//     let [name,,salary]=str.split(',');
//     let numsal= parseInt(salary);
//     salaries.push(numsal);
//     let avg=0;
//     for(let sal of salaries){
//       avg+=sal/salaries.length;
//     }
//     if(numsal>avg){
//       expSal=numsal;
//     }
//     console.log(expSal);
//   }

// }
// closeToAvg([ "Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000" ]);

// function isLeapYear(year){
//    if((year%4===0 && year%100 !== 0)||year%400===0){
//     return true;
//    }
//    else{
//     return false;
//    }
// }
// let year= 1900;
// if(isLeapYear(year)){
//   console.log(`${year} is leap year` )
// }
// else{
//   console.log(`${year} is not leap year`)
// }


// function separateDigits(number){
//   let numList= number.toString().split('').reverse().map(Number).join('');
//   console.log(numList)
// }
// let number=23122006;
// separateDigits(number);

// function separateDigits(number){
//   let digits=[];
//   while(number>0){
//     digits.unshift(number%10);
//     number= Math.floor(number/10)
//   }
//   return digits;
// }

// let digits=separateDigits(123456).reverse().join('');
// console.log(digits)


//Given two dates as strings "JAN-12-2024", 
//"FEB-12-1900" return the date that comes chronologically first i.e. FEB-12-1900

// function comesFirst(data){
//    for(let str of data){
//     console.log(str);
//    }
// }
// comesFirst(data);

// function findMax(arr) {
//   if (arr.length === 0) return undefined;

//   let max = arr[0];
//   for (let i = 1; i <= arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(findMax([1, 3, 5, 2, 4]));
// console.log(findMax([]));
// console.log(findMax([10, -5, 20]));
// console.log(findMax["a", "b", "c"]);


// function fibonacciSeries(n){
//   if(n===0) return [];
//   if(n===1) return [0];
//   let fib= [0,1];
//   for(let i=2; i<n; i++){
//     fib.push(fib[i-1]+ fib[i-2]);
//   }
//   return fib;
// }
// console.log(fibonacciSeries(17));

// function findLCM(arr) {
//   const LCMof = (a,b)=>{
//      let max= Math.max(a,b);
//      while(true){
//       if(max%a===0 && max%b===0){
//         return max;
//       }
//       max++;
//      } 
//   }
//   return arr.reduce((lcm,num)=>LCMof(lcm, num),1)
// }
// console.log(findLCM([4,6,8]));

// function findLCM(arr) {
//   const LCMof = (a, b) => {
//       let max = Math.max(a, b);
//       while (true) {
//           if (max % a === 0 && max % b === 0) {
//               return max; // Return LCM when divisible by both
//           }
//           max++; // Check the next number
//       }
//   };
//   return arr.reduce((lcm, num) => LCMof(lcm, num), 1); // Pairwise LCM
// }

// // Corrected call to findLCM
// console.log(findLCM([4, 6, 8])); // Output: 24


//Calculate the average salary of all employees from the array of strings.
//Input: ["Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000"]

// function avgSalary(arr){
//   let avg=0;
//   let sal=0;
//   for(let item of arr){
//     console.log(item)
//     let [name,age, salary]= item.split(",");
//     let numSal= parseInt(salary);
   
//   }
// }
// avgSalary(["Emily,24,85000", "Sophia,29,45000", "Olivia,31,120000"])

// function findEarlierDate(date1,date2){
//   let D1= new Date(date1);
//   let D2= new Date(date2);
//   return (D1<D2) ? D1: D2;
// } 

// const date1 = "JAN-12-2024";
// const date2 = "FEB-12-1900";
// function customDate(dateStr){
// let [month, day,year]= dateStr.split("-")
// const months = {
//  JAN: "01",
//  FEB: "02",
//  MAR: "03",
//  APR: "04",
//  MAY: "05",
//  JUN: "06",
//  JUL: "07",
//  AUG: "08",
//  SEP: "09",
//  OCT: "10",
//  NOV: "11",
//  DEC: "12"
// };
// return `${year}-${months[month.toUpperCase()]}-${day}`

// }
// let pdate1= customDate(date1);
// let pdate2= customDate(date2);
// console.log(findEarlierDate(pdate1,pdate2));
 
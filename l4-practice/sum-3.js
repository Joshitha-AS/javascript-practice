// function pattern1(n) {
//     for (i = 1; i <= n; i++) {
//         let str = "";
//         for (j = n - i; j > 0; j--) {
//             str = str + " ";
//         }

//         for (k = 1; k <= i; k++) {
//             str = str + "*" + " "
//         }
//         console.log(str)
//     }
// }
// pattern1(5);

// function pattern2(a){
//     for(let i=1; i<=a; i++){
//         let str="";
//         for(let j=1; j<=i; j++){
//             str+="* ";
//         }
//         console.log(str)
//     }
// }
// pattern2(5);

// function pattern3(n){
//     let count=1;
//     for(let i=1; i<n;i++){
//         let str="";
//         for(let j=1; j<=i; j++){
//             str+=count+" ";
//             count++;
//         }
//         console.log(str.trim());
//     }
// }
// pattern3(5);

// function pattern4(n){
//     let count=1;
//     for(let i=1; i<=n; i++){
//         let str="";
//         for(let j=n-i; j>0; j--){
//             str+=" ";
//         }
//         for(let k=1; k<=2*i-1; k++){
//             str+= k;
         
//         }
//         console.log(str);
//     }
// }
// pattern4(5)

// function pattern5(n){
//     for(let i=1; i<=n; i++){
//         let sum=0;
//         let str="";
//         for(let j=1; j<=i; j++){
//           str+=j+" ";
//           sum+=j;
//         }
//         str+= "="+ sum;
//         console.log(str);
//     }
// }
// pattern5(5);

// function amstrongNumber(num){
//    let digList= num.toString().split('');
//    let len= digList.length;
//    let sum=0;
//    for(let digit of digList){
//     sum+= Math.pow(parseInt(digit),len);
//    }
//  return sum ;
// }
// console.log(amstrongNumber(150));

// function isEndWithSame(nu){
//     let sqr= num*num;
//     return sqr.toString().endsWith(nu.toString());
// }

// function palindrome(letter){
//    let ar= letter.split('');
//    let len= ar.length;
//    let revStr= "";
//    for(let i=len-1; i>=0; i--){
//        revStr+=ar[i];

//    }
//    return revStr===letter;
// }
// let letter="mam";
// // console.log(palindrome(letter));
// if(palindrome(letter)){
//     console.log(`${letter} is palindrome`);
// }
// else{
//     console.log(`not palindrome`);
// }

// function isHappyNumber(num){
//     let setobj= new Set();
//     while(num === 1 && !setobj.has(num)){
//         setobj.add(num);
//         num= num.toString().split('').reduce((sum,digit)=> sum+ Math.pow(digit,2),0)
//     }
//     return num===1;
// }
// console.log(isHappyNumber(19))

// function isKaprekar(k){
//      let tr= k*k;
//     let kstr = tr.toString();
//      let kstr_len= kstr.length;
//      let left= parseInt(kstr.slice(0, kstr_len/2))|| 0;
//      let right = parseInt(kstr.slice(kstr_len/2))||0;
//     const sum= left+right;
//     return sum===k;
// }
// console.log(isKaprekar(45));

// function fibonacciSquaresSum(n){
//   let a=0;
//   let b=1;
//   let sum=0;
//   for(let i=1; i<= n; i++){
//     let next= a+b;
//     sum+= b*b;
//     a=b;
//     b=next;
//   }
//   return sum;
// }
// console.log(fibonacciSquaresSum(5));

function fibonacciAlternatingSum(n){
    let a=0;
   let b=1;
   let sum=0;
    for(let i=1; i<=n; i++){
        if(i%2===1){
            sum+=b;
        }
        else{
            sum-=b;
        }
        let next= a+b;
        a=b;
        b=next;
    }
    return sum;
}
console.log(fibonacciAlternatingSum(5))
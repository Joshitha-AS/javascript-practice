// let num=231206;
// let digits=[];
// let str="";
// while(num>0){
//     let digit= num%10;  //gets last digit
//     digits.unshift(digit);     //appends the digit to digits
//     num=Math.floor(num/10);    //updates the last digit
// }
// for(i=0;i<digits.length;i++){
//     str+=digits[i]+",";
// }
// console.log(str);

let num=23122006;
let digits=[];
while(num>0){
    let digit=num%10;
    digits.unshift(digit);
    num=Math.floor(num/10);
}
for(i=0;i<digits.length;i++){
    console.log(digits[i]);
}

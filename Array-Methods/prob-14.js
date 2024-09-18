let num=231206;
let digits=[];
while(num>0){
    let digit=num%10;
    digits.unshift(digit);
    num= Math.floor(num/10);
}
for(i=0;i<digits.length;i++){
    console.log(digits[i]);
}
//palindrome 

let str="madam";
let reversestr="";
for(let i= str.length-1 ; i>=0; i--){
    reversestr += str[i];
}
if(reversestr===str){
    console.log("palindrome");
}
else{
    console.log("not a palindrome");
}




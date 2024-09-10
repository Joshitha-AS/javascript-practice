let n1= 5;
let n2= 6;
function comparenumbers(n1,n2){
    if(n1>n2){
        return "first number is greater";
    }
    else if(n1<n2){
        return "the second number is greater";
    }
    else{
        return "they are equal";
    }
}
let result=comparenumbers(n1,n2);
console.log(result);
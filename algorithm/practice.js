let a=7;
let b=5;
let c=a;
console.log(a,b);
a=b;
b=c;
console.log(a,b)

let x = 20, y = 10;
console.log("Before Swapping: x = " + 
x + ", y = " + y);
// x now becomes 30
x = x + y;

// y becomes 20
y = x - y;

// x becomes 10
x = x - y;

console.log("After Swapping: x = " + 
x + ", y = " + y);

// using XOR
a=3;
b=4;
console.log(a,b)
a= a^b;
b= a^b;
a=a^b;
console.log(a,b)

// three varibles

a=10;
b=20;
c=30;
console.log(a,b,c);

// a is 60 
a= a+b+c;
// 1. Calculate Simple Interest for a Loan
// Task: Use the formula Simple Interest = (P * R * T) / 100 where P = 10000, R = 5, and T = 3.
let p=1000;
let R=5;
let T=3;
let si=(p*R*T);
let rate=(si/100);
console.log("Simple Interest="+rate);

// 2. Calculate the Area of a Garden
// Task: Use the formula Area = 3.14159 * r * r where r = 14.
let Area=3.14159;
let r=14;
let ar=parseInt(Area);
let gar=(ar*r*r);
console.log(gar);

// 3. Swap the Price of Two Products
// Task: Assign priceA = 150 and priceB = 200, then swap the values using arithmetic operations.
let C=150;
let D=200;
console.log(C,D);
C=C+D
D=C-D
C=C-D
console.log(C,D);

//4. Calculate the Average Marks of a Student
//Task: Use the formula Average = (num1 + num2 + num3) / 3 where num1 = 85, num2 = 90, and num3 = 95.
let num1=85;
let num2=90;
let num3=95;
let Average=(num1+num2+num3)/3;
console.log(Average)

//5. Calculate Compound Interest for an Investment
//Task: Use the formula Compound Interest = P * (1 + R/100)^T - P where P = 5000, R = 6, and T = 4.
let prin=5000;
let ra=6;
let t=4;
let a=prin*(1+ra/100)*t;
let cit=prin-a;
console.log(cit);


//6. Determine Profit from Selling a Laptop
//Task: Use the formula Profit = SP - CP where CP = 800 and SP = 950.
let cp=800;
let sp=950;
let formula=(sp-cp);
console.log(formula);

//7. Calculate the Fencing Required for a Rectangular Field
//Task: Use the formula Perimeter = 2 * (l + w) where l = 50 and w = 30.
let l=50;
let w=30;
let Perimeter=2*(l+w);
console.log(Perimeter);

//8. Bitwise AND for Security Permissions
//Task: Use the & operator to calculate the result where x = 25 and y = 19.
let x=25;
let y=19;
let z=(x&y);
console.log("AND operator="+z)

//9. Convert Celsius to Fahrenheit for Weather Reporting
//Task: Use the formula Fahrenheit = (Celsius * 9/5) + 32 where Celsius = 22.
let celsius=22;
let Fahrenheit=(celsius*9/5)+32
console.log("Fahrenheit=" + Fahrenheit)

//10. Calculate the Volume of a Water Tank
//Task: Use the formula Volume = 3.14159 * r * r * h where r = 5 and h = 10.

// let r=5; it already decalered
let h=10;
let Volume1=(3.14159*r*r*h)
let Volume=parseInt(Volume1)
console.log("Volume="+Volume)
function findvowels(l) {
    if (l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u' || l == "A" || l == 'E' || l == 'I' || l == 'o' || l == 'U') {
        console.log("The letter is a vowel");
    }
    else {
        console.log("The letter is a consonant");
    }
}
let l = 'c';
findvowels(l);


function maxi(a, b, c) {
    if ((a > b) && (a > c)) {
        console.log(`${a} is the greater number`);
    }
    else if ((b > a) && (b > c)) {
        console.log(`${b} is the greater number`);
    }
    else {
        console.log(`${c} is the greater number`);
    }
}
let a = 10;
let b = 30;
let c = 5;
maxi(a, b, c);

function oddnum(n) {
    for (i = 0; i <= n; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
let n = 10;
oddnum(n);


function discount(num) {
    let initialDis = 5;
    for (let i = 1; i < num; i++) {
       initialDis+=2;
    }
    return initialDis;
}
let num=10;
console.log(discount(num));


// function printAllMultiplesOf5(a,b){
    
//     while(a<=b){
//       if(a%5===0){
//         console.log(a);
//       }
//       a++;
//     }
// }
// let x=3;
// let y=25;
// printAllMultiplesOf5(x,y);



function printAllMultiplesOf6(w,v){
    while(w<=v){
      if(w%6===0){
        console.log(w);
      }
      w++;
    }
}
let w=11;
let v=29;
printAllMultiplesOf6(w,v);

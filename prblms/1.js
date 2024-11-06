function printTriangle(v) {
    for (let i = 1; i <= v; i++) {
        let row = '';
        for (let j = 1; j <= v; j++) { 
            row += '* ';
        }
        console.log(row);
    }
}

// Example usage
let v = 5;
printTriangle(v);

////////////////////////////////////////////

function isPrime(num) {
    if(num<=1) return false;
    if(num===2) return true;
    for(let j=2; j<= Math.sqrt(num); j++){
        if(num%j===0){
            return false;
        }
    }
    return true;
}
// Example usage
let num = 25;
console.log(isPrime(num));

////////////////////////////////////////

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b; 
        a = temp;  
    }
    return a;
}

// Example usage
let a = 48, b = 18;
console.log(gcd(a, b));

////////////////////////////////////////////////

function printHollowSquare(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n-i; j++) {
            if (i === 1 || i === n || j===1 || j===n ) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}

// Example usage
let n = 5;
printHollowSquare(n);

///////////////////////
 function hcfof(x,y){
    let max= Math.max(x,y);
    while(max>0){
        if(x%max===0 && y%max===0){
            return max;
        }
        max--;
    }
 }
 console.log(hcfof(10,20));

 /////////////////////////////////////
 function GCDof(p,q){
    if(p<q){
        let temp= p;
        p=q;
        q=temp;
    }
    while(q!==0){
        let temp=q;
        q=p%q;
        p=temp;
    }
    return p;
 }
 console.log(GCDof(20,10));
 //////////////////////////////////////
 function LCMof(c,d){
    let num= c*d;
    for(let i=1; i<=num; i++){
        if( i%c===0 && i%d===0){
            return i;
        }
    }
 }
 console.log(LCMof(8,16));

 
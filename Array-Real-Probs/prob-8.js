let str="Freshworks, Global Infocity, Perungudi, Chennai - 600096";
let newarray=str.split(",");
for(i=0;i<newarray.length;i++){
    console.log(newarray[i]);
}

let power=1;
let n=5;
while(n<10000){
    n*=5;
    power++;
}
console.log(n);
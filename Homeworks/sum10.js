let water_levels = [30, 50, 20, 40, 60];
let temp= water_levels[0];
let len=water_levels.length;
for(let i=0;i<len;i++){
    if(temp>water_levels[i]){
        temp=water_levels[i];
    }
}
console.log(temp);

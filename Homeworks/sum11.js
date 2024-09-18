let days_until_festival = [30, 15, 45, 10, 25];
let temp=days_until_festival[0];
let len=days_until_festival.length;
for(let i=0;i<len;i++){
    if (temp>days_until_festival[i]){
        temp=days_until_festival[i];
    }
}
console.log(temp);
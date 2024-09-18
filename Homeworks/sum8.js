let soldiers = [120, 300, 250, 180, 150];
let temp=soldiers[0];
for(let i=0; i<soldiers.length;i++){
    if(temp<soldiers[i]){
        temp=soldiers[i];
    }
}
console.log(temp);

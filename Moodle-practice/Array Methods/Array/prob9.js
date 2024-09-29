
//prob-24
let students_per_route = [45, 55, 30, 60, 40];
let len=students_per_route.length;
let temp=students_per_route[0];
let busNeeded=0;
for(let i=0;i<len;i++){
    if(students_per_route[i]>50){
        busNeeded++;
    }
}
console.log(busNeeded);
let landing_times = [10, 15, 12, 18, 10];
let len=landing_times.length;
let temp=landing_times[0];
let count=0;
for(let i=0; i<len;i++){
    if(temp===landing_times[i]){
        count++;
        if(count>1){
            console.log("more than one");
        }
    }
}

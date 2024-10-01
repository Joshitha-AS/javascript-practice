//create an array of 4 numbers. Use pop() to remove the
// elements one by one and store them
// in a new array in reverse order. Print the reversed array.
let array=[1,2,3,4];
let newarray=[];
for(i=array.length;i>0;i--){
       let poped=array.pop();
       console.log(poped);
       newarray+=poped + ",";

}
console.log(newarray);

let arr=[1,2,3,4,5];
let revarr=[];
for(let i=0;i<arr.length;i++){
       revarr.unshift(arr[i]);
}
console.log(revarr);


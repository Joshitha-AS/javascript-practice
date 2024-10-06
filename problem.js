// let array=[3,6,1,4,9,0,8,5,10,2];
// for(let i=2; i< array.length; i+=3)
// {
//     console.log(array[i]);
// }

// unction ischar(char){
//     let b=char.toLowerCase();
//     if(b==='a'){
//         return true;
// }
//      else if(b==='d'|| b==='e'|| b==='f'){
//         return false;
//      }
//      else{
//         return 1;
//      }
// }

// console.log(ischar('g'));f


// let arr = [12, 3, 4, 5, 6, 8, 9,];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// if (sum % 3 === 0) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }
// console.log(sum);


// function arrsum(arr){
//     let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2===1){
//         sum += arr[i];
//     }
    
// }
// if (sum % 3 === 0){
//     return true;
// }
// else {
//    return false;
// }
// }


// let arr = [12, 3, 4, 5, 6, 8, 7,];
// console.log(arrsum(arr));


// let arr=[];
// function inbetween(a,b){
//     for(let i=a; i<=b; i++){
//         arr.push(i);
//     }
//     console.log(arr);
//     let revarr=arr.reverse();
//     console.log(revarr);
   
// }
// let a= 10;
// let b= 25;
// inbetween(a,b);

// let arr=[];
// function inbetween(n1,n2){
//     for(let i=n1; i<=n2; i++){
//         if(i%2===0){
//             arr.unshift(i)
//         }
//         else{
//             arr.push(i);
//         }
//     }
//     console.log(arr);
// }
// inbetween(10,20);



// let ordarr=[];
// function oddeven(array){
//     for(let i=0;i< array.length; i++){
//         if(array[i]%2===0){
//             ordarr.unshift(array[i]);
//         }
//         else{
//             ordarr.push(array[i]);
//         }
        
//     }
//     console.log(ordarr);
// }
// let array=[12,18,23,5,17,8,9,32,6];
// oddeven(array);

function isprimes(num){
        if(i<=1) return false;
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i===0) return false;
        }
        return true;
}
for(let i=0; i<=num; i++){
   if(isprimes(i)){
    console.log(i);
   }
}
isprimes(20);




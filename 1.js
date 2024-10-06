/* let arr=[1,2,3,5,4];
let sorted_arr=arr.sort((a,b)=>a-b); //[1,2,3,4,5,6]
let re_arr=[1 ,3, 4, 2];
let k=3;
for(let i=0;i<arr.length+1-k;i++){ 
    if (re_arr[i]==sorted_arr[i]) {
        continue;
       
    }
    else{

        
        let element=sorted_arr[i]; //3
        let element_index=re_arr.indexOf(element);  // 5


        if(element_index<re_arr.length&&element_index>=re_arr.length-k+1){
                element_index=re_arr.length-k;
        }
        else{
            element_index=i;
        }


        let sliding_array=[];   //[ 6, 5, 2 ] [ 5, 2, 4 ] [ 2, 4, 3 ]
        for (let j = element_index; j < element_index+k; j++) {
            sliding_array.push(re_arr[j])
        }
        while (sliding_array[0]!=element) {
            sliding_array.push(sliding_array.shift())
        }     
        re_arr.splice(element_index,k,...sliding_array)
        // console.log(re_arr);
    
    }
    // console.log("======");
    
  i=-1;
  
} */

// if (re_arr[arr.length-1]==sorted_arr[arr.length-1]) {
//     return("yes");
    
// }
// else{
//     return("no");
    
// }

// return JSON.stringify(re_arr)==JSON.stringify(sorted_arr)?"YES":"NO"

console.log(re_arr);

//[ 6, 5, 2 ]
       
        /* while (sliding_array[0]!=element) {
            sliding_array.unshift(sliding_array.pop())
           
        } */
   
   
       /*  if (arr[arr.length-k]==sorted_arr[arr.length-k]) {
            break; */
            // arr.splice(i,k,...sliding_array)
// let modarr=[];
// function squrootof(arr){
//     modarr.push(arr.map(a=>a*2));
//     return modarr;
// }


// let arr=[2,5,6,9,12];
// console.log(squrootof(arr));



// let array=[1,2,3,4,5,6,7];
// function squareof(array){
//     return array*2;
// }
// let arr=array.map(squareof);
// console.log(arr);

// let 

// let arr=[ [1,2,3], [4,5,6], [7,8,9] ];

// function rotatearray(arr){
//     let empt=[];
//     for(let i=0; i< arr.length; i++){
//         let sub_arr=[]
//         for(let j=arr.length-1; j>=0 ;j--){   
//             sub_arr.push(arr[j][i]);
//         }
        
//     empt.push(sub_arr)
//     }
//     return empt;
// }
// console.log(rotatearray(arr));


// let a=[1,2,3,4];

// let emp=[];
// for(let i=0; i< a.length;i++){
//     emp.push(a*=arr[i])
//     console.log(emp);
// }



function rotate(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let temp=arr[i][j];
            arr[i][j]=arr[j][i];
            arr[j][i]=temp;
        }
    }
     for(let i=0;i<arr.length;i++){
        arr[i].reverse();
    } 
    return arr;
   
}
// [arr[i][j],arr[j][i]]=[arr[j][i],arr[i][j]]   
let arr=[ [1,2,3], [4,5,6], [7,8,9] ];
console.log(rotate(arr)); 
// [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
// let arr=[ [1,2,3], [4,5,6], [7,8,9] ];
// console.log(arr.map((x,i,a)=>x.map((y,j)=>y[j]=a[arr.length-1-j][i])));

//[arr[i][j],arr[j][i]]=[arr[j][i],arr[i][j]]
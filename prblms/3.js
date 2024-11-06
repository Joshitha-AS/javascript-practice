let modarr=[];
function squrootof(arr){
    modarr.push(arr.map(a=>a*2));
    return modarr;
}


let a=[2,5,6,9,12];
console.log(squrootof (a));



let ar=[1,2,3,4,5,6,7];
function squareof(ar){
    return ar*2;
}
let b=array.map(squareof);
console.log(b);

let c=[ [1,2,3], [4,5,6], [7,8,9] ];

function rotatearray(c){
    let empt=[];
    for(let i=0; i< c.length; i++){
        let sub_arr=[]
        for(let j=c.length-1; j>=0 ;j--){   
            sub_arr.push(c[j][i]);
        }
        
    empt.push(sub_arr)
    }
    return empt;
}
console.log(rotatearray(arr));


let d=[1,2,3,4];
let emp=[];
for(let i=0; i< d.length;i++){
    emp.push(d*=arr[i])
    console.log(emp);
}



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
//[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
let array=[ [1,2,3], [4,5,6], [7,8,9] ];
console.log(array.map((x,i,a)=>x.map((y,j)=>y[j]=a[array.length-1-j][i])));

[arr[i][j],arr[j][i]]=[arr[j][i],arr[i][j]]
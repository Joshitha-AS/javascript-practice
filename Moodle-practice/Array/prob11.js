// let array=["one","two","three","four"];
// let revarr=[];
// let len=array.length;
// for(i=len-1;i>=0;i--){
//     revarr+= array[i]+" ";
// }
// console.log(revarr);


// let arr=[2,3,4,5,6,7,8,10];

// let evencount=0;
// let oddcount=0;
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         evencount++;
//     }
//     else{
//         oddcount++;

//     }
// }
// console.log(evencount);
// console.log(oddcount);

let numbers=[2,3,4,5,6];
let newarray=[];
let len=numbers.length;
for(i=0;i<len;i++){
    let el= numbers.pop();
    newarray+=el;
}
console.log(newarray);

//prob
let fruit=["grape","mango","orange","apple"];
let fruits=fruit.join("");
console.log(fruits);

//prob
let car={
    make:"nisson",
    model:"nisson123",
    year:2021
};
console.log(car.year);

//prob 
let book={
    book1:["atomic habits","james clear"],
    book2:["alchemist","paulo ceulo"]
};

console.log(book.book1[0]);

//prob
let Array=[{brand:"toyota",model:"to123"},
    {brand:"nissan", model:"niss123"}
];
Array.push({brand:"ferari",model:"fer123"});
console.log(Array);

//prob
let items=[
    {name:"lap",price:300},
    {name:"phone",price:200},
    {name:"earpods",price:100}
];
let sum=0;
let leng=items.length;
for(i=0;i<leng;i++){
    
}

let students = [
    { name: "Amar", grade: "A" },
    { name: "Akbar", grade: "B" },
    { name: "Anthony", grade: "A" },
    {name: "john",grade: "A"},
    {name:"san", grade: "B"}
];
for(i=0;i<students.length;i++){
    if(students[i].grade==="A"){
        console.log(students[i].name);
    }
}


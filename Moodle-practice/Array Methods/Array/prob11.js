let array=["one","two","three","four"];
let revarr=[];
let lengt=array.length;
for(i=lengt-1;i>=0;i--){
    revarr+= array[i]+" ";
}
console.log(revarr);


let arr=[2,3,4,5,6,7,8,10];

let evencount=0;
let oddcount=0;
for(i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        evencount++;
    }
    else{
        oddcount++;

    }
}
console.log(evencount);
console.log(oddcount);

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


//prob
let scores=[200,300,50,150,90];
let summ=0;
let avg=0;
let l=scores.length;
for(i=0;i<scores.length;i++){
    summ+=scores[i];
    avg=summ/l;

}
console.log(avg);

//prob
let testGrades=[15,5,9,21,18,25,5];
let maxi= Math.max(...testGrades);
console.log(maxi);

//prob
let num=[24,5,6];
for(i=0;i<num.length;i++){
    console.log(num[i].toString(2));
}

//prob
let arr1=[true,false,true];
let arr2=[false,true,true];
let newarr=[];
for(i=0;i<arr1.length;i++){
    newarr.push(arr1[i]&&arr2[i]);
}
console.log(newarr);

//prob
let oldPrice=[20,60,40];
let newPrice=[40,120,80];
let incPer=[];
for(i=0;i<oldPrice.length;i++){
    let incPercentage=((newPrice[i]-oldPrice[i])/oldPrice[i])*100;
    incPer.push(incPercentage)

    
}
console.log(incPer);

//prob
let set1=[30,40,15,35];
let set2=[5,15,70,20];
let unionSet=[...new Set([...set1, ...set2])];
console.log(unionSet);

//prob


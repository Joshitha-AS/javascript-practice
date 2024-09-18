let fruits = ["Apple", "Banana","grape","pear","watermelon"];
let revele=[];
for(i=fruits.length;i>0;i--){
    let poped=fruits.pop([i]);
    // revele+=poped+" ";
    console.log(poped);
}

console.log(revele);
console.log(fruits);

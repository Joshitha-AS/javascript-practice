//Given a array of string return the String which has the maximum 
//length. ar = ["Ram", "Abraham", "Peter"] output is Abraham
let ar=["Ram", "Abraham", "Peter"];
let long="";
for(let i=0; i<ar.length; i++){
    if(ar[i].length> long.length){
        long= ar[i];
    }
}
console.log(long);

//In an array of string, return all the string which start with the letter 'a' (Case insensitive) 
//for eg arr = ["apple", "Ali", "mango","Brush"] it should print apple, Ali
let arr = ["apple", "Ali", "mango", "Brush"];
for (let i = 0; i < arr.length; i++) {
    let ans = arr[i][0]; // Get the first character of the current string
    if (ans === 'a' || ans === 'A') {
        console.log(arr[i]); // Print the whole string that starts with 'a' or 'A'
    }
}

//3
let str= "joshitha";
let revstr= "";
for(let i=str.length-1; i>=0; i--){
    revstr+=str[i];
}
console.log(revstr);
//Given an array of strings, return the string which has maximum 'a' character present in it. 
// eg = ["apple", "appeal", "after", "banish"] output is appeal as it has 2 a's in it


// function mostCount(arr) {
//     let maxcount = 0;
//     for (let word of arr) {
//         let acount = 0;
//         for (let letter of word) {
//             if (letter === 'a') {
//                 acount++;
//             }
//         }

//         if (acount > maxcount) {
//             maxcount = acount;

//         }
        
//     }
//     return maxcount;
// }
// let arr = ["apple", "appeal", "after", "banish"];
// console.log(mostCount(arr));


//Traverse the array and return the index of the first negative number encountered.
// function negativeIndex(a){
//     for(let i=0; i<= a.length; i++){
//         if(a[i]<0){
//             return i;
//         }
//     }
// }
// let a=[2,3,4,8,9,-10,9];
// console.log(negativeIndex(a));

//Given array two arrays student names and scores, return the student name who has the maximum score 
//eg names=["sanjay", "priya", "ramesh", "sanjana"], scores = [88, 45, 71, 91] Answer sanjana

function mostScores(names,scores){
    if(names.length !== scores.length){
       console.log("name and scores should be entered")
    }
    let maxcount=scores.indexOf(Math.max(...scores));
    console.log(names[maxcount])
    
}
mostScores(["sanjay", "priya", "ramesh"], [88, 45, 71]);
function selectionSort(arr){
    let n= arr.length;
    for(let i=0; i< n; i++){
        let minIndex= i;
        for(let j=i+1; j<n; j++){
           if(arr[minIndex]> arr[j]){
              minIndex=j
           }
          
        }
        if(minIndex !== i){
            [arr[i],arr[minIndex]]= [arr[minIndex], arr[i]]
           }
       
    }
    return arr;
}
console.log(selectionSort([9,3,5,7,1,56,2]))
console.log("======================================")

//Implement it for an array of Employee objects which has name, 
//age and salary. Sort it by Salary. Additional question, write a function which will sort the array of employee objects by a specific field. 


//implement the selection sort algorithm.Please print the each step of the algorithmIf the arr = [4,5,1,3,7]
// Output:
// 4 5 1 3 7
// 1 5 4 3 7
// 1 3 4 5 7
// 1 3 4 5 7
// 1 3 4 5 7

function selectionSortEachRow(input){
    let n=input.length;
    for(let i=1; i< n; i++){
        midIndex= i;
        for(let j=i+1; j<n; j++){
            if(input[midIndex]<input[j]){
                midIndex=j
            }
        }
        if(minIndex !== i){
            [input[i], input[midIndex]]=[input[minIndex],input[i]]
            print(input)
        }
    }
}
function calculateGrade(score){
    if (score>=90 &&score<=100){
         console.log("grade a");
    }
    else if( score<90 && score>=80){
        console.log("grade B");
    }
    else if( score<80 && score>=70){
        console.log("grade c");
    }
    else if(score<70 && score<=60){
        console.log("grade D");
    }
    else{
        console.log("grade f")
    }
   
}
calculateGrade(78);
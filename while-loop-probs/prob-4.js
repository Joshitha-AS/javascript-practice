checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);
function checkNumber(num) {
  if (num < 0){                    //less than 0 is negative
    console.log("Negative");      //brackets missing
  }                  
  else if (num > 0) {              //grater than 0 is positive
    console.log("Positive");
  } 
  else {
    console.log("Zero");
  }
}
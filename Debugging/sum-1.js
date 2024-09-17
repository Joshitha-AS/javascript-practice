function sumNumbers(n) {
    let sum = 0;
    let i = 0;
    while (i <= n) {
      sum += i;
      i++;
    }
    return sum;
  }
  let n=10;
  let res= sumNumbers(n);
  console.log(res);

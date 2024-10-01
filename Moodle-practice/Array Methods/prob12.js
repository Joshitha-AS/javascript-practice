function isPrime(num){
    if(num<=1)
        return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
        return true;
    }
  


for(i=2;i<=10;i++){
    if(isPrime(i)){
        console.log(i);
    }

}
}


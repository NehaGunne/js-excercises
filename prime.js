const isPrime=(n)=>{
    if(n<2){
        return false
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
       
        if(n%i==0){
            return false
        }
    }
    return true
}
console.log(isPrime(1));

//Big o=O(n/2)
//Big O=O(sqrt(n))
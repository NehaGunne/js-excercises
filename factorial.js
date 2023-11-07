const factorial=(n)=>{
    let mul=1
    for(let i=2;i<=n;i++){
        mul=mul*i
    }
    return mul
}
console.log(factorial(4))

//Big O=O(n)

//recursion

const recFact=(n)=>{
    if(n<=1){
        return n;
    }
    return n * recFact(n-1)
}
console.log(recFact(5));
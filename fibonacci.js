const fibonacci=(n)=>{
    const result=[0,1];
    for(i=1;i<n-1;i++){
        const newNum=result[i]+result[i-1]
        result.push(newNum)
    }
    return result;
}
console.log(fibonacci(10))

//Big O=O(n)

//recursion

const fib=(n)=>{
    if(n<2){
        return n;
    }
    return fib(n-1)+fib(n-2)
}
console.log(fib(3));

//Big O=O(2^n)
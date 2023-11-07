const isPowerOfTwo=(n)=>{
    for (let index = 0; index < n; index++) {
        if(Math.pow(2,index)===n){
            return true
        }
        if(Math.pow(2,index)>n){
            return false
        }
        
    }
    return false

}
const isPowerOfTwoBitwise=(n)=>{
    if(n<1){
        return false
    }
    return (n & (n-1))===0
}
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(83));
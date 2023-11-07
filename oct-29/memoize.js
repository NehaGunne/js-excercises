function calc(num){
    console.log('fun ran',num)
    sum=0
    for(let i=0;i<=num;i++){
        sum += i
    }
    return sum
}

function memoize(cb){
    const cache={}
    return function(...args){
        const num=args[0]
        if(num in cache){
            return cache[num]
        }
        else{
            cache[num] = calc(num)
            return cache[num]
        }
    }
}
console.time()
const efficientCalc=memoize(calc)
console.log(efficientCalc(6))
console.timeEnd() 

 console.time()
console.log(efficientCalc(6))
console.timeEnd() 

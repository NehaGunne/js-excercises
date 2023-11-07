function convert(sentence){
   /*  const arr=sentence.split(' ')
    for(let i in arr){
        string=arr[i][0].toUpperCase() + arr[i].slice(1)
        arr[i]=string
    }
    return arr.join(" ") */
    
    const arr=sentence.split(" ").map((word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return arr.join(" ")
}
console.log(convert('hi neha , are you fine'))
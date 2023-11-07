function reverseEachWord(sentence){
    const arr=sentence.split(' ');
   const newArr=arr.map((item)=>{
   /*  s=''
    for(let i=item.length-1;i>=0;i--){
        s=s+item[i]
    }
    return s */
    return item.split('').reverse().join('') 
   })
 return newArr.join(' ')
}

const sentence='hi bro';
console.log(reverseEachWord(sentence))
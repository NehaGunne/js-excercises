function countLetters(word){
const obj={}
for(let i of word){
   obj[i]=obj[i]+1 || 1
}
return obj
}

const res=countLetters('nehaneha')
console.log(res)
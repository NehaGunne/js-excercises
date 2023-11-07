const str1="abbaeio"

let count=0
const vowels=['a','e','i','o','u'];
for(let i of str1){
    if(vowels.includes(i)){
        count++
    }
}
console.log(count)

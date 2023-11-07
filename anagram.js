

const str1="abba"
const str2="aabb";
//console.log(str1.split("").sort().join("")===str2.split("").sort().join(""))

function checkAnagram(str1,str2){
    const obj={}
for(let i of str1){
    obj[i]= obj[i]+1 || 1
}
    for (let j of str2){
        if(obj[j]){
         obj[j]=obj[j]-1 
            
        }
        else{
            return false
        }
}
return true
}
console.log(checkAnagram(str1,str2))

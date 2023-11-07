function findMostRepeated(arr=[]){
     const firestEl=arr[0]
    // manually add first element because val in reduce starts from 2nd ele and 1st ele is stored as highest
    const obj={[`${firestEl}`]:1}
    const res=arr.reduce((highest,val)=>{
        obj[val]= obj[val]+1 || 1
        if(obj[highest] < obj[val]){
            return val
        }
        return highest
    }) 
    /* const obj={}
    arr.forEach((item)=>{obj[item]=obj[item] +1 || 1})
    const res = Object.keys(obj).reduce((acc,next)=>{
        return obj[acc] > obj[next] ? acc : next
    }) */
    return res
    
}
const arr=[2,1,2,3,4,3,5,3,3,1,1,2,1,2,1,1,2,1,2,2,2,2,2]
const res= findMostRepeated(arr)
console.log(res)
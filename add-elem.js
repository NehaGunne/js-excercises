function add(arr){
    const res=arr.reduce((acc,val)=>typeof val === 'number' ? acc+val : acc)
    return res

}
const res=add([1,2,3,'kdke','neha',4,5,'mun',10])
console.log(res)
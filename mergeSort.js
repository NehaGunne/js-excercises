let count=1
const mergeSort=(arr)=>{
    if(arr.length<2){
        return arr
    }
    const mid=Math.floor(arr.length/2)
    const leftArr=arr.slice(0,mid)
    const rightArr=arr.slice(mid);
    console.log(count,'--------l',leftArr);
    console.log(count,'----------r',rightArr);
    count++
    console.log('final',merge(mergeSort(leftArr),mergeSort(rightArr)))
    return merge(mergeSort(leftArr),mergeSort(rightArr))
    
}

const merge=(leftArr,rightArr)=>{
    const temp=[];
    console.log('called merge',leftArr,rightArr);
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            temp.push(leftArr.shift())
        }else{
            temp.push(rightArr.shift())
        }
    }
    return [...temp,...leftArr,...rightArr]
}

console.log(mergeSort([-2,-6,5,1,10,6]))
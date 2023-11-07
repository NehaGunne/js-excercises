const binarySearch=(arr,n)=>{
    let leftIndex=0;
    let rightIndex=arr.length-1;
    while(leftIndex<=rightIndex){
        let midIndex=Math.floor((leftIndex+rightIndex)/2)
        if(n===arr[midIndex]){
            return midIndex
        }
        else if(n<arr[midIndex]){
            rightIndex=midIndex-1;
        }
        else{
            leftIndex=midIndex+1;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],10));

//Big O=O(log n) ==>input is reduced to half in every iteration

const recursiveBinarySearch=(arr,n,leftIndex=0,rightIndex=arr.length-1)=>{
    let midIndex=Math.floor((leftIndex+rightIndex)/2);
    if(leftIndex>rightIndex){
        return -1;
    }
    if(n==arr[midIndex]){
        return midIndex;
    }
    else if(n>arr[midIndex]){
         return recursiveBinarySearch(arr,n,midIndex+1,rightIndex)
    }
    else{
         return recursiveBinarySearch(arr,n,leftIndex,midIndex-1)
    }
  
}

console.log(recursiveBinarySearch([1,2,3,4,5,6,7,8,9,10,11],2))
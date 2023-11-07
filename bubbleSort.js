const bubbleSort=(arr)=>{
    let flag=true;
        while(flag){
            flag=false
            for (let i = 0; i < arr.length-1; i++) {
                if(arr[i]>arr[i+1]){
                    let temp=arr[i];
                    arr[i]=arr[i+1];
                    arr[i+1]=temp;
                    flag=true;
                }
               
            }

        }
    return arr;
}

console.log(bubbleSort([2,3,1,4,7,5,2,1,8,7,-6,12,-2,20]))

//Big O=O(n^2)
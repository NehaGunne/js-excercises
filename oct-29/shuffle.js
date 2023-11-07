let nums=[1,2,3,4,5,6]

const shuffledNums=nums.sort(()=>{
    const val=Math.random() - 0.5
    //console.log(val);
    return val
})
//.map((num)=>({num:num,id:Math.random()}))
console.log(shuffledNums);

function shuffle(arr){
    totalArea=arr.length;
    while(totalArea > 0){
        totalArea--;
        const randomIndex = Math.floor(Math.random() * totalArea)
        temp=arr[totalArea];
        arr[totalArea]=arr[randomIndex]
        arr[randomIndex]=temp;
    }
    return arr
}
console.log(shuffle(nums))

const linearSearch=(arr,n)=>{
for (let i = 0; i <arr.length; i++) {
    const element = arr[i];
    if(element===n){
        return i
    }
}
return -1;
}

console.log(linearSearch([1,2,3,4,5],5));

//BigO=O(n)
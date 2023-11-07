const cartesianProduct=(arr1,arr2)=>{
    const res=[]
    for (let i = 0; i < arr1.length; i++) {
       for (let j = 0; j < arr2.length; j++) {
           res.push([arr1[i],arr2[j]])
           
       }
        
    }
    return res
}
console.log(cartesianProduct([1,2],[3,4,5]));

//Big O= O(n^m) =>not n^2 b/c both the arrays can be of diff length.
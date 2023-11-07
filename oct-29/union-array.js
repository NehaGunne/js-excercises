const arr1=[1,2,8,100,3,4];
const arr2=[4,2,9,20,100];

const union=[...new Set([...arr1,...arr2])]
console.log(union)

//intersection

const smallerArr= arr1.length < arr2.length ? arr1 : arr2;
const largerArr= arr1.length > arr2.length ? arr1 : arr2;
const intersect=[]

for(let i of smallerArr){
 if(largerArr.includes(i)){
    intersect.push(i)
 }
}

console.log('intersection',intersect)


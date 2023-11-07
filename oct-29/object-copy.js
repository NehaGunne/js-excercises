const obj1={
    name:'neha',
    surname:"gunne",
    address:{
        street:'gandhi',
        city:"vkb"
    }
}
//shallow copy
// const obj2={...obj1}
//const obj2=Object.assign({},obj1)

//Deep copy
const obj2=JSON.parse(JSON.stringify(obj1))
obj2.name="munni"
obj2.address.street="abc" 

console.log("obj2",obj2);
console.log("obj1",obj1); 
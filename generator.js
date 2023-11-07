function* generator(){
    let id=100
    while(true){
    yield id++
    }
}
const genObj=generator();
console.log(genObj.next())
console.log(genObj.next())
console.log(genObj.next())
console.log(genObj.next())
console.log(genObj.next())
console.log(genObj.next())
// generator obj returns next(),return(),throw()
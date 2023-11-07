function calcRent(){
    let rent=6000;
    let i=1
    return (months)=>{
        console.log(`function is called ${i++} times`)
        console.log(rent * months)
    }

}
const totalRent=calcRent();
totalRent(5)
totalRent(1)
totalRent(1)


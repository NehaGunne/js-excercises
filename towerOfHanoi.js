let c=0
const towerOfHanoi=(n,fromRod,UsingRod,toRod)=>{
    if(n==1){
        c=c+1
        console.log(`move disc 1 from ${fromRod} to ${toRod}`,c);
        return;
    }
     towerOfHanoi(n-1,fromRod,toRod,UsingRod)
     c=c+1
     console.log(`move disc ${n} from ${fromRod} to ${toRod}`,c);
     towerOfHanoi(n-1,UsingRod,fromRod,toRod);

}

towerOfHanoi(7,'A','B','C')

//Big O=O(2^n)
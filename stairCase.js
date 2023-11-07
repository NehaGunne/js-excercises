const noOfWaysToClimbStairCase = (noOfSteps) => {
  if (noOfSteps == 1) {
    return 1;
  }
  if (noOfSteps == 2) {
    return 2;
  }
  return (
    noOfWaysToClimbStairCase(noOfSteps - 1) +
    noOfWaysToClimbStairCase(noOfSteps - 2)
  );
};

console.log(noOfWaysToClimbStairCase(5));


const withoutRecursion=(n)=>{
    const noOfWays=[1,2]
    for (let i = 2; i <= n; i++) {
        noOfWays[i]=noOfWays[i-1]+noOfWays[i-2]
        
    }
    return noOfWays[n-1]

}

console.log(withoutRecursion(4));

//Big O=O(n)

/*
 Given a starcase of n steps.count the no of distinct ways to clmb to top.
you can either clmb 1 or 2 steps at a time

ex:-
n=1 => (1) => 1way
n=2 => (1,1),(2)=>2 ways
n=3 => (1,1,1),(1,2),(2,1)=>3ways
n=4 => (1,1,1,1),(2,2),(1,2,1),(1,1,2),(2,1,1)=>5 ways

to get n steps, we can calculate by noOfWaysToClimbStairCase(n-1)+noOfWaysToClimbStairCase(n-2)
here n=4=(n-1)+(n-2)=>3ways+2ways=5ways
 */

//using map
function check1(str){
    const stack=[];
    const map=new Map([['{','}'],['(',')'],['[',']'],[[1,2,3],'a']])
    console.log(map)
   for(let i of str){
    if(stack.length){
        const ele=stack[stack.length-1]
        console.log(map.get(ele),ele)
        if(map.get(ele) === i){
            stack.pop()
        }
        else{
            stack.push(i)
        }
    }else{
        stack.push(i)
    }
   }
   return stack.length === 0
}

// using obj

function check(str){
    const stack=[];
    const obj={')':'(',']':'[','}':'{'}
    console.log(obj)
    for(let i of str){
        if(stack.length!==0){
           if( stack[stack.length-1]== obj[i]){
               stack.pop()
           }
           else{
                stack.push(i)
               
           }
        }
        else{
            stack.push(i)
        }
    }
    return stack.length===0
    
}

const str='()'
const res=check1(str)
console.log(res)
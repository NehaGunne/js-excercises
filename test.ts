interface ITest{
state?:string;
name1?:string
}

const test:ITest={
    name1:'hey',
}

const {name1,state}=test



console.log('hello world',name1,state)
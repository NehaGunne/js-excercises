const person1={
    Fname:"Neha",
    Lname:"Gunne",
    printName: function(age,city){
        console.log(`${this.Fname} ${this.Lname}
        Age is ${age}
        city is ${city}`)
    }
}

const person2={
    Fname:"abc",
    Lname:"def"
}

person1.printName.call(person2,20,"HYD")
person1.printName.apply(person2,[20,"HYD"])
const newFun=person1.printName.bind(person2,20,"YD")
newFun()



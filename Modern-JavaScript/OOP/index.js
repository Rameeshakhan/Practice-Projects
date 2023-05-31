const name = "rameesha"
const name2 = new String("rameesha")  //object
console.log(name)
console.log(name2)

class person{
    constructor(name , age){
        this.name = name,
        this.age = age
    }
        greetings(){
            return `Hello there this is ${name}`
        }
}

//prototype
person.prototype.goodBye = function(name){
    return `good bye ${name}`
}

const p1 = new person("rameesha", 21)
console.log(p1)

console.log(p1.greetings())
console.log(p1.goodBye("rameeha"))




class Human {
    data = 'hello world'
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayName() {
        console.log('Name', this.name)
    }

    sayAge() {
        console.log('Age', this.age)
    }
}

const gendalf = new Human('Gendalf', 666)

gendalf.sayAge()
gendalf.sayName()

export const a = 1
// export const b = 5
const c = a 
console.log(c)
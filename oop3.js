class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    describe () {

        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}


class Programmer extends Person {

    constructor(name, age, yearsOfExperience) {
        super(name, age);
        this.yearsOfExperience = yearsOfExperience;
    }

    code () {
        console.log(`${this.name} is coding`)
    }

}
let person1 = new Person("Jeff", 45);
let programmer = new Programmer("darasimi", 33, 12);
// console.log(person1)
// console.log(programmer)
const programmers = [
    new Programmer("Dom", 45, 12),
    new Programmer("Jeff", 32, 3)
]
function developSoftware(programmers) {
    for (let programmer of programmers) {
        programmer.code();
    }
}

developSoftware(programmers);
// polymorphism

class Animal {
    constructor (name) {
        this.name = name;
    }

    makeSound (){
        console.log("Generic animal Sound");
    }
}

class Dog extends Animal {
    constructor (name) {
        super(name);
    }
    makeSound() {
        super.makeSound()
        console.log("woof Woof")
    }
}
a1 = new Animal('Dog');
a1.makeSound()

dog1 = new Dog("Jeff");
dog1.makeSound()
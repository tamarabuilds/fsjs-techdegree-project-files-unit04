class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }

    speak() {
        console.log(this.sound);
    }
}

const ernie = new Pet('dog', 1, 'pug', 'bark')
const vera = new Pet('dog', 8, 'border collie','woof')

console.log(ernie)

ernie.speak();
vera.speak();
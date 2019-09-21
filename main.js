const AnimalSays = {
    dog () {
        return 'woof';
    },

    cat () {
        return 'meow';
    },

    lion () {
        return 'roar';
    },
    default () {
        return 'moo';
    }
};

function makeAnimalSpeak (animal) {
    const speak = AnimalSays[animal] || AnimalSays.default;
    console.log(animal + ' says ' + speak());
}

makeAnimalSpeak('dog')
makeAnimalSpeak('cat')
makeAnimalSpeak('lion')
makeAnimalSpeak('snake')
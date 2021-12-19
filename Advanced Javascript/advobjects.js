//reference type
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};
object1 === object2;
true
//because object 1&2 have same reference
object1 === object3;
false

// context

const object4 = {
    a: function() {
        console.log(this);
    }
}

//instantiation

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        console.log('player', this);
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type} `);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`Heyyyy I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Ankur', 'Healer');
const wizard2 = new Wizard('Shyam', 'Attack Magic User');

// in console
// wizard1.play()
// Heyyyy I'm a Healer
// wizard2.introduce()
// Hi I am Shyam, I'm a Attack Magic User 
// wizard1.introduce()
// Hi I am Ankur, I'm a Healer 
// wizard2.play()
// Heyyyy I'm a Attack Magic User


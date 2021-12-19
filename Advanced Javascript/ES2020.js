//Bigint a new type like number, boolean etc for higher number calc. In Javascript, The MAX_SAFE_INTEGER constant has a value of 9007199254740991 & MIN_SAFE_INTEGER) -9007199254740991. we represent bigint by using 'n'.

9007199254740991 + 3
9007199254740994
9007199254740991 + 9
9007199254741000
9007199254740991 + 10
9007199254741000
9007199254740991n + 10n 
9007199254741001n
1n + 2n
3n
typeof 3n
'bigint'

//optional chaining operator (?)
let vivek_pokemon = {
    pichu: {
        species: 'Mouse',
        height: 2.5,
        weight: 15,
        power: '',
        power1: 0
    }
}
let weight = vivek_pokemon.pichu.weight;
console.log(weight);
let weight2 = vivek_pokemon?.pikachu?.weight;
console.log(weight2);
let weight3 = vivek_pokemon?.pichu?.weight;
console.log(weight3);

//Nullish Coalescing Operator (??) : used instead of '||' operator
let power = vivek_pokemon?.pichu?.power || 'no power'
console.log(power);
let power1 = vivek_pokemon?.pichu?.power1 || 'no power'
console.log(power1);
// no power even though we have Value
let power2 = vivek_pokemon?.pichu?.power1 ?? 'no power'
console.log(power2);

//practice
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

// this
// if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
//     && will_pokemon.pikachu && will_pokemon.pikachu.friend 
//     && will_pokemon.pikachu.friend.charizard) {
//         console.log('fight!')
//     } else {
//         console.log('walk away...')
//     }
// to this
if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
    console.log('fight')
} else {
    console.log('walk away')
}

// ES2021
// Str.replaceAll

const str = "India is the best among all the other nations"
const str1 = str.replace('the', 'a');
const str2 = str.replaceAll('the', 'a');
console.log(str);
console.log(str1);
console.log(str2);

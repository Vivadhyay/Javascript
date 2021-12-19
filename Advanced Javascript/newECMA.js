//new in ES7
//includes
const pets = ["dog", "cat", 'bird'];
pets.includes('bird');
true;
pets.includes('bat');
false;

//to power
const square = (x) => x ** 2;
const cube = (x) => x ** 3;
// square(12)
// 144
// cube(8)
// 512

//new in ES8
//padstart() & padend()  : padding includes the string sign too im length
'start'.padStart(12);
'end'.padEnd(12);

//trailing comms in functions, parameter list ans calls
const fun = (a, b, c, d,) => {
    console.log(a);
}

fun(1, 2, 3, 4,);
// 1

// below used for doing thing similar to array on objects

Object.values
Object.entries
Object.keys

let obj = {
    username0: "Ram",
    username1: "Shyam",
    username2: "Vishnu"
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
});
Object.values(obj).forEach((value) => {
    console.log(value);
});
Object.entries(obj).forEach((value) => {
    console.log(value);
});
Object.entries(obj).map(value => {
    console.log(value[1] + value[0].replace('username', ''));
    // or return value[1] + value[0].replace('username', '');
});

// Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle = turtle.trim().padEnd(9, '=');
// turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);
console.log(startLine);
console.log(turtle);
console.log(rabbit);


let obj1 = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

Object.entries(obj1).map(value => value.join(" ")).join(' ');
// 'my name is Rudolf the raindeer' in console

// new in ES10
//flat : it flatten or cleanup the array, default value is 1 & can select value based on complexity of an array

const array = [1,2,3,4,5];
const array1 = [1,2,[3,4],5];
const array2 = [1,2,[3,4,[5]]];
console.log(array.flat());
console.log(array1.flat());
console.log(array2.flat());
console.log(array2.flat(2));

const entries = ['bob', 'sally',,,,,,,['cindy']];
console.log(entries.flat());

//flatMap()
const entries2 = entries.flatMap(name => name + 'cindy');
console.log(entries2);

//trimstart() & trimend()
const username = '         vivek';
const username2 = 'ankur      ';
console.log(username.trimStart());
console.log(username2.trimEnd());

//fromEntries: it transform the list of key value pairs into an object

userProfiles = [['ankur', 23], ['suneel', 24], ['shyam', 30]];
console.log(Object.fromEntries(userProfiles));
// object has been created in console

//try & catch

try {
   4 + 5  
} catch {
  console.log('you messed up');
}; 
// 9 :in console
try {
    bob + 5  
 } catch {
   console.log('you messed up');
 }; 
// you messed up :in console

//practice
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(x => x.join(' ')));

const greeting1 = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting1.flatMap(x => x.join(' ')).join(' '));

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity));

const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   ';
console.log(userEmail3.trimEnd().trimStart());

// Turn the below users (value is their ID number) into an array
const users = { 
    user1: 18273, 
    user2: 92833, 
    user3: 90315 
};

// to get values
Object.entries(users).forEach((key, value) => {
    console.log(key, value);
});
// correct way
const usersArray = Object.entries(users)
console.log(usersArray);

const updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2]);
console.log(updatedUsersArray);

const updatedObject = Object.fromEntries(updatedUsersArray);
console.log(updatedObject);

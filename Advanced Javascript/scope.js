// Root/parent/window scope 
var fun = 5;

function funn() {
    // child scope
var fun = "hellooo";
console.log(1, fun);
};

function funner() {
    // child scope
var fun = "hiiii";
console.log(2, fun);
};

function funest() {
    // child scope
var fun = "howdddyyyy";
console.log(3, fun);
};

console.log("greet", fun);
funn();
funner();
funest();

// ternary operator generally used for to choose one out of two
// written as : condition ? expr1 : expr2;

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied";

var automatedAnswer = "Your account no. is " + (isUserValid(false) ? "1234" : "not valid");

// switch statement , The break statement terminates the current loop, switch , or label statement and transfers program control to the statement following the terminated statement.


function movecommand(direction) {
    var whathappens;
    switch (direction) {
        case "forward" :
            whathappens = "You ran into a monster";
            break;
        case "backward" :
            whathappens = "You are safe";
            break;
        case "right" :
            whathappens = "You met an angel";
            break;
        case "left" :
            whathappens = "You reached home";
            break;
            default:
                whathappens = "Enter a valid direction";
    }
    return whathappens;
}

//let & const variables, let can only be accessed from inside the element and of const. we cannot change the value of the variable but can the properties of variable.

const player = "vivek";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log(1, wizardLevel);
}
console.log(2, wizardLevel);

// Destructuring

const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
}

// if want to select from above variable we just use
const { player, experience} = obj;
let { wizardLevel} = obj;

var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;
// can be written as

const {firstname, lastname, age, eyecolor} = person;

// object properties

const name = "john";
const pro = {
    [name]: 'helloo',
    [1 +  2]: 'hihi'
};

var a = 'test';
var b = true;
var c = 789;

// var okObj = {
//   a: a,
//   b: b,
//   c: c
// };
// can be written as

var okObj = {a, b,c};

// Template strings

const name = "Sally";
const age = 23;
const pet = "Dog";

const greeting = `Hello ${name} you seem to be ${age}. What ${pet} do you have.`;

// default arguments

function greet( name="", age=30, pet="Cat")  {
  return `Hello ${name} you seem to be ${age}. What ${pet} do you have.`;
} 
// greet("jade", 23, "pup"); in console
// 'Hello jade you seem to be 23. What pup do you have.'

//symbol generally used to define unique value

let sym1 = Symbol();
let sym2 = Symbol('doo');
let sym3 = Symbol('doo');

// sym1   : in console
// Symbol()
// sym2 === sym3
// false

//Arrow function

function add(a, b) {
    return a + b;
}
// or we can write 
const add2 = (a, b) => a + b;

//closure.. a function ran, the function executed, it never gonna execute again but it's going to remember that there are refrences to those variables so the child scope always has access to parent scope. but parent not always has access to child scope..

const first = () => {
    const greet = 'Helloo';
    const second = () => {
        // alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//currying

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

// in console :     curriedMultiply(4)(6);
// multiplyBy5(8);
// 40

const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
// add5(12);   in console
// 17

//Compose: act of putting two function together to form a third function where the output of one function is the input of other function.

const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;

// compose(sum, sum)(5);
// 7

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
// compose(add1, add5)(10);  in console
// 16

// The two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.
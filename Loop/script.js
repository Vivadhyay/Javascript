var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "bathing",
    "eat healthy",
    "study javascript"
];
// var todosLength = todos.length;
// for (var i=0; i < todosLength; i++) {
// console.log(todos[i], i);}

// todos.forEach(function(todos, i) {
//     console.log(todos, i);
// });
// also can be create by creating a function and can be used with many arrays
function logTodos(todo, i) {
    console.log(todo, i);
}
todos.forEach(logTodos);

// todos[i] = todos[i] + "!";
// todos.pop();
// }
// to pop out to-do list 

// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++;
// }
// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
// }

// var counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);

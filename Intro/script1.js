var animals = ["Tiger", "Lion", "Bear", "Wolf"];
// things come in console section of inspect
console.log(animals[3]);
// array inside array
var animals = [["Tiger", "Lion", "Bear", "Wolf"]];
console.log(animals[0][2]);

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0];

var array = ["Apples", "Oranges", "Blueberries"];
// 4. Remove "Apples" from the array.
array.splice(0, 1);

// data structure -  object
var user = {
name: "vivek",
age: "28",
sport: "football",
hobby: ["gaming", "movies", "travelling"],
food: function() {
    console.log("many items");
}}
// in console, 
// user.age;
// '28'
// user.hobby[2];
// 'travelling'
// we can also make objects in an array



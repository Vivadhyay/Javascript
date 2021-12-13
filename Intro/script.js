4 + 3;
if (4+3 === 7) {
    // alert("You're smart");
}
// function creation and to excute a function we have to call a function
function sing() {
    console.log("I love to sing");
    console.log("Singing is my passion");
}
function sing2(song) {
    console.log(song);
}
sing2("There goes my baby");
sing2("Hey you!!");

function multiply (a, b) {
    return a * b;
    // or return (a * b); return always execute whatever we write first and exits.
}
function multiply (a, b) {
    if (a > 10 || b > 20) {
        return "It is difficult"
    }
        else {
        return a * b;
} 
// execute the funtion in console and check its corrrect or not
}
var a = function(a, b) {
    if (a > 10 || b > 20) {
        return "It is difficult"
    }
        else {
        return a * b;
}
}
function multiply (a, b) {
    return a * b;
}
// alert(multiply(12,12));

//  use Google Chrome javascript console to test below code.
var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?


//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.
var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!" 
function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}

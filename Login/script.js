var database = [
    {
        username: "vivek",
        password: "1111"
    },
    {
        username: "ankur",
        password: "2222"
    },
    {
        username: "suneel",
        password: "3333"
    }
];
var newsFeed = [
    {
        username: "ankur",
        timeline: "He is a web developer."
    },
    {
        username: "rajat",
        timeline: "he is a AEM developer."
    },
    {
        username: "Suneel",
        timeline: "He is pursuing web development"
    }
];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
        } 
        return false;  
}
function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

// if (username === database[0].username && password === database[0].password)
// { console.log(newsFeed); }
// else {
//     alert("Sorry, wrong username and password");
// }

// for (var i=0; i < database.length; i++) {
//     if (database[i].username === username && database[i].password === password) {
//         console.log(newsFeed);
//     } else {
//         alert("Sorry, wrong username and password");
//     }
var userNameprompt = prompt("what's your username");
var passwordprompt = prompt("what's your password");

signIn(userNameprompt, passwordprompt);

var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function () {
    console.log("Click!!!");
});

var button2 = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.code === "Enter") {
    createListElement();
     }    
}
button2.addEventListener("click", addListAfterClick);

// this is for entering items by pressing enter key

input.addEventListener("keypress", addListAfterKeypress);
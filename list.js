let inputTextEl = document.getElementById("inputText");
let buttonEl = document.getElementById("button");
let unorderListEl = document.getElementById("unorderList");

buttonEl.onclick = function() {
    let inputTextElValue = inputTextEl.value;

    let listItems = document.createElement("li");
    listItems.textContent = inputTextElValue;
    listItems.classList.add("list");
    unorderListEl.appendChild(listItems);
};
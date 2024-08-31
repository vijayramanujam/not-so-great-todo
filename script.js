
// Add button

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const todo = document.querySelector("input[name='todo']"); // grab the input data

    if (todo.value !== "") {   // if there is something
        const item = document.createElement("li");   // create a li item

        // create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            item.remove(); // remove the item (li) when clicked
        });


        // create a complete button
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", () => {
            item.classList.toggle("completed"); // adds a class to complete button

            if (item.classList.contains("completed")) {
                completeButton.textContent = "Incomplete";
            } else {
                completeButton.textContent = "Complete";
            }
        });



        const textSpan = document.createElement("span"); // create a span element
        textSpan.classList.add("todo-text"); // adds a todo-text class to this span
        textSpan.textContent = todo.value; // actual todo in play

        item.appendChild(deleteButton);
        item.appendChild(completeButton);
        item.appendChild(textSpan);

        const list = document.getElementById("todo-list");
        list.appendChild(item);

        todo.value = "";
    }

});

const clearButton = document.getElementById('clearButton');
const clearAllButton = document.getElementById('clearAll')


clearButton.addEventListener('click', function () {
    const todo = document.querySelector("input[name='todo']");
    if (todo.value !== "") {
        todo.value = "";
    }
});


clearAllButton.addEventListener('click', function () {
    const todoList = document.getElementById("todo-list");

    if (todoList.children.length > 0) {
        todoList.innerHTML = "";
    }
});





const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector(".addTaskButton");
const list = document.querySelector(".list");
const saveListButton = document.querySelector(".saveListButton");
const resetListButton = document.querySelector(".resetListButton");

const loadSave = () => {
    const listItems = JSON.parse(localStorage.getItem("listItems")) || [];
    listItems.forEach((item) => {
        if (list.children.length < 3) {
            addListItem(item);
        }
    });
};

const addListItem = (text) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");

    const taskText = document.createElement("span");
    taskText.textContent = text;
    taskText.classList.add("task-text");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    // Кнопка "Позначити виконаним"
    const completeButton = document.createElement("button");
    completeButton.textContent = "✔";
    completeButton.classList.add("complete-button");
    completeButton.addEventListener("click", () => {
        taskText.classList.toggle("completed");
    });

    // Кнопка "Редагування"
    const editButton = document.createElement("button");
    editButton.textContent = "✏️";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", () => {
        const newText = prompt("Edit your task:", taskText.textContent);
        if (newText !== null && newText.trim() !== "") {
            taskText.textContent = newText;
            saveList();
        }
    });

    // Кнопка "Видалення"
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
        listItem.remove();
        saveList();
    });

    // Додаємо кнопки до контейнера
    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    // Додаємо текст і кнопки до <li>
    listItem.appendChild(taskText);
    listItem.appendChild(buttonContainer);

    list.appendChild(listItem);
};

const addTask = () => {
    if (list.children.length >= 3) {
        alert("Too many tasks!!!");
        return;
    }

    const task = taskInput.value;

    if (task.trim() === "") {
        return;
    }

    addListItem(task);
    taskInput.value = "";
};

const saveList = () => {
    const listItems = Array.from(list.children).map(
        (child) => child.querySelector(".task-text").textContent
    );
    localStorage.setItem("listItems", JSON.stringify(listItems));
};

const resetList = () => {
    localStorage.removeItem("listItems");
    list.innerHTML = "";
    alert("List reset!");
};

addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    addTask();
});

saveListButton.addEventListener("click", saveList);
resetListButton.addEventListener("click", resetList);

loadSave();

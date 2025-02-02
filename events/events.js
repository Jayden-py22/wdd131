let tasks = [];

function renderTasks(tasks) {
    const listElement = document.querySelector("#todoList");
    listElement.innerHTML = "";
    const html = tasks.map(taskTemplate).join("");
    listElement.innerHTML = html;
}

function taskTemplate(task) {
    return `
        <li ${task.completed ? 'class="strike"' : ""}>
            <p>${task.detail}</p>
            <div>
                <span data-function="delete">❌</span>
                <span data-function="complete">✅</span>
            </div>
        </li>`;
}

function newTask() {
    const taskValue = document.querySelector("#todo").value;
    if (taskValue.trim() === "") return;
    tasks.push({ detail: taskValue, completed: false });
    document.querySelector("#todo").value = "";
    renderTasks(tasks);
}

function removeTask(taskElement) {
    tasks = tasks.filter(task => task.detail !== taskElement.querySelector('p').innerText);
    taskElement.remove();
}

function completeTask(taskElement) {
    const taskIndex = tasks.findIndex(task => task.detail === taskElement.querySelector('p').innerText);
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    taskElement.classList.toggle("strike");
}

function manageTasks(event) {
    const parent = event.target.closest("li");
    if (event.target.dataset.function === "delete") {
        removeTask(parent);
    }
    if (event.target.dataset.function === "complete") {
        completeTask(parent);
    }
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);
renderTasks(tasks);
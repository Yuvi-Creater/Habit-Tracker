// Add New Tasks 
let addBtn = document.querySelector("#adding-btn")
let tasks = document.querySelector("#tasks")
let taskList = document.querySelector("#task-list")

addBtn.addEventListener("click", function () {

    let taskInput = prompt("Enter a new task")

    if (taskInput) {
        let taskId = `task-${Date.now()}`

        taskList.insertAdjacentHTML("beforeend",
            `<li>${taskInput} <input class="box" id="${taskId}" type="checkbox"></li><br>`
        )
    }
})

// Delete Tasks
let deletebtn = document.querySelector("#delete-btn");

deletebtn.addEventListener("click", function () {
    let checkBoxes = document.querySelectorAll(".box:checked")

    checkBoxes.forEach((checkbox) => {
        checkbox.parentElement.remove()
    })
})

// Edit Tasks
let editBtn = document.querySelector("#edit-btn")

editBtn.addEventListener("click", function () {

    let checkBoxes = document.querySelectorAll(".box:checked")

    checkBoxes.forEach((check) => {

        let newTask = prompt("Enter a new task")

        if (newTask) {
            check.parentElement.firstChild.textContent = newTask
        }
    })
})
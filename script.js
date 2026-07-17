// ===========================
// TO-DO LIST
// ===========================

// Store tasks
const tasks = [];

// Get HTML elements
const button = document.getElementById("addTaskBtn");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Check if elements exist
if (button && input && taskList) {

    // Add task when button is clicked
    button.addEventListener("click", addTask);

    // Add task when Enter key is pressed
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {

        const task = input.value.trim();

        if (task === "") {
            alert("Please enter a task.");
            return;
        }

        // Save task
        tasks.push(task);

        // Create list item
        const listItem = document.createElement("li");

        // Task text
        const taskText = document.createElement("span");
        taskText.textContent = task;

        // Complete button
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        // Toggle completed state
        completeButton.addEventListener("click", function () {

            listItem.classList.toggle("completed");

            if (listItem.classList.contains("completed")) {
                taskText.style.textDecoration = "line-through";
                taskText.style.color = "gray";
                completeButton.textContent = "Undo";
            } else {
                taskText.style.textDecoration = "none";
                taskText.style.color = "";
                completeButton.textContent = "Complete";
            }

        });

        // Delete task
        deleteButton.addEventListener("click", function () {

            taskList.removeChild(listItem);

            const index = tasks.indexOf(task);

            if (index > -1) {
                tasks.splice(index, 1);
            }

        });

        // Add elements
        listItem.appendChild(taskText);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        // Clear input
        input.value = "";
        input.focus();

    }

}

// ===========================
// CONTACT FORM VALIDATION
// ===========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check empty fields
        if (!name || !email || !phone || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone validation
        const phonePattern = /^[0-9]{7,15}$/;

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        alert("Message sent successfully!");

        contactForm.reset();

    });

}
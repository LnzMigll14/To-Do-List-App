// Get references to the input field and the task list container
const input = document.getElementById("input");
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask() {
    // If input is empty or only spaces, show an alert
    if (input.value.trim() === "") {
        alert("Please enter a task.");
        return; // Stop function if input is empty
    } else {
        // Create a new <li> element and add the input value as its text
        let li = document.createElement("li");
        li.innerHTML = input.value;

        // Add the new task to the task list container
        listContainer.appendChild(li);

        // Create a <span> element with a multiplication sign (×) for delete button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode character ×
        li.appendChild(span); // Add the delete button to the task <li>
    }

    // Clear the input field after adding the task
    input.value = "";
}

// Event listener for clicks inside the task list
listContainer.addEventListener("click", function (e) {
    // If a task (li) is clicked, toggle the "checked" class for strikethrough effect
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    // If the × (span) is clicked, remove the corresponding task
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) { // Check if form exists before adding event listener
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission

      const newTaskDescription = e.target.new_task_description.value.trim(); // Trim whitespace
      if (!newTaskDescription) { // Check if input is empty
        return; // Exit if empty to prevent empty tasks
      }

      const ul = document.querySelector("#tasks");
      const list = document.createElement("li");
      const button = document.createElement("button");

      button.textContent = "x"; // Set button text without extra space
      list.textContent = newTaskDescription;
      list.appendChild(button);

      ul.appendChild(list); // Append directly to ul (no need for p)
      form.reset(); // Reset form after adding task

      // Optional: Add event listener to the button for task removal
      button.addEventListener("click", () => {
        ul.removeChild(list); // Remove the task list item (li)
      });
    });
  } else {
    console.error("Form element not found!"); // Handle missing form
  }
});
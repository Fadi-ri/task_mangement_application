
// the change fun ressbonsibel of the hamberger buttton 


const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});


// the ressbonsobel of the adding bottun



const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}



//the tasks codz




const inputBox = document.getElementById("input-box"); // Get the input box element
const listContainer = document.getElementById("list-container"); // Get the list container element

function addTask() {
  if (inputBox.value === '') { // Check if the input box is empty
    alert("Task name is empty"); // If empty, show an alert
  } else {
    let li = document.createElement("li"); // Create a new list item element
    li.textContent = inputBox.value; // Set the text content of the list item to the input box value
    listContainer.appendChild(li); // Append the list item to the list container
    listContainer.appendChild(li);
    let span = document.createElement ("span");
    span. innerHTML= "\u00d7";
    li.appendChild(span);

}

  inputBox.value ="";
}

listContainer.addEventListener("click", function(e) {
  // Check if the clicked element is an <li>
  if (e.target.tagName === "LI") {
     // Toggle the "checked" class on the clicked <li>
     e.target.classList.toggle("checked");
 }
 // If the clicked element is a <span>
 else if (e.target.tagName === "SPAN") {
     // Remove the parent element of the <span>, typically an <li>
     e.target.parentElement.remove();
 }
}, false);

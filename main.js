const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const successPopup = document.getElementById("success-popup");
const emailDisplay = document.getElementById("email-display");
const dismissBtn = document.getElementById("dismiss-btn");
const form = document.querySelector("form");

// Function to toggle error message visibility
function toggleErrorMessage() {
  if (emailInput.checkValidity()) {
    errorMsg.classList.add("hidden");
  } else {
    errorMsg.classList.remove("hidden");
  }
}

// Show error message on input event (as user types)
emailInput.addEventListener("input", toggleErrorMessage);

// Show error message on blur event (when user leaves the field)
emailInput.addEventListener("blur", toggleErrorMessage);

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  if (!emailInput.checkValidity()) {
    // If email is invalid, show error message
    errorMsg.classList.remove("hidden");
  } else {
    // If email is valid, show success modal
    emailDisplay.textContent = emailInput.value;
    successPopup.classList.remove("hidden");
    successPopup.classList.add("sm:flex");
  }
});

// Handle dismiss button click
dismissBtn.addEventListener("click", function () {
  successPopup.classList.add("hidden");
  successPopup.classList.remove("sm:flex");
  form.reset();
});

// Close modal when clicking outside
successPopup.addEventListener("click", function (e) {
  if (e.target === successPopup) {
    successPopup.classList.add("hidden");
    form.reset();
  }
});

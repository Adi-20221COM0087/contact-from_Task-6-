document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    
    // Get all form elements needed
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const successMsg = document.getElementById("successMsg");

    // Enhanced Email regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    /**
     * Helper function to validate a field, set error message, and apply styling.
     * @param {Object} inputElement - The input DOM element (nameInput, emailInput, etc.)
     * @param {string} errorText - The error message to display if invalid.
     * @param {boolean} isEmail - Flag to check against the email regex.
     * @returns {boolean} True if the field is valid, false otherwise.
     */
    function validateField(inputElement, errorText, isEmail = false) {
        const value = inputElement.value.trim();
        const errorElement = document.getElementById(inputElement.id + "Error");
        
        // Clear previous state
        errorElement.textContent = "";
        inputElement.classList.remove('input-error');

        if (value === "") {
            errorElement.textContent = errorText;
            inputElement.classList.add('input-error');
            return false;
        }

        if (isEmail && !emailPattern.test(value)) {
            errorElement.textContent = "Please enter a valid email address.";
            inputElement.classList.add('input-error');
            return false;
        }

        return true;
    }

    // --- 1. Form Submission Handler ---
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent actual form submission

        // Run validation checks
        const isNameValid = validateField(nameInput, "Name cannot be empty.");
        const isEmailValid = validateField(emailInput, "Email cannot be empty.", true);
        const isMessageValid = validateField(messageInput, "Message cannot be empty.");

        const valid = isNameValid && isEmailValid && isMessageValid;

        // If valid → show success message and clear fields
        if (valid) {
            successMsg.textContent = "Form submitted successfully!";
            
            // Clear inputs and error classes (already cleared on validation success, but good practice)
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        } else {
             successMsg.textContent = ""; // Clear success message if submission failed
        }
    });

    // --- 2. Real-time Feedback (UX Improvement) ---
    // Clears the success message if the user starts typing again
    function clearSuccess() {
        successMsg.textContent = "";
    }

    nameInput.addEventListener('input', clearSuccess);
    emailInput.addEventListener('input', clearSuccess);
    messageInput.addEventListener('input', clearSuccess);
});
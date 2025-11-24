# contact-from_Task-6-

This project involved Task 6: Creating a Contact Form and Validating Inputs using JavaScript. The primary objective was to build a standard HTML contact form (Name, Email, Message) and implement robust client-side validation logic. The core requirements of the task were to:

1.	Validate on Submit: Check inputs when the form is submitted.

2.	Non-Empty Check: Ensure that the Name, Email, and Message fields are not empty.

3.	Email Format Validation: Use Regular Expressions (Regex) to verify a valid email format.

4.	User Feedback: Display clear error messages directly beneath the corresponding input fields when validation fails.

5.	Submission Control: Prevent the form from submitting if any input is invalid.

6.	Success Message: Show a confirmation message upon a valid submission.

The implemented solution fully satisfies these requirements. Additionally, the code was improved by applying several best practices for enhanced user experience (UX) and code quality:

⦁	Visual Error Indicators: Invalid fields are visually highlighted by adding a red border (.input-error class) to the input box itself, providing immediate feedback beyond just the text message.

⦁	Code Reusability: A dedicated JavaScript helper function (validateField) was created to handle the common logic of checking validity, setting error text, and applying/removing error styling, resulting in a cleaner and more maintainable main submit function.

⦁	Input Security: Used textContent instead of innerHTML for displaying error and success messages, which is a safer practice to mitigate potential security risks (like XSS).

⦁	UX Refinement: An additional event listener was implemented to automatically clear the "Form submitted successfully" message as soon as the user starts typing in any field again, allowing for immediate re-submission attempts.

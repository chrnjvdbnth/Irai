document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-button');
    const inputs = document.querySelectorAll('.number-input');
    const errorMessage = document.getElementById('error-message');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        
        // Reset previous error state
        let valid = true;
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';
        inputs.forEach(input => {
            input.classList.remove('invalid');
        });
        
        // Validate each input
        inputs.forEach(input => {
            const value = parseFloat(input.value);
            if (isNaN(value) || value < 0 || value > 200) {
                valid = false;
                input.classList.add('invalid');
            }
        });

        // Display error message if there is an invalid input
        if (!valid) {
            errorMessage.textContent = 'Invalid amount entered. Amount should be between 0 and 200.';
            errorMessage.style.display = 'block';
        } else {
            // If all inputs are valid, handle form submission here
            console.log('Form submitted successfully!');
            // Perform form submission logic here, e.g., send data to server
        }
    });
});

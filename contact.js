// Wait for the page to load before showing the form
window.addEventListener('load', () => {
    const formContainer = document.querySelector('.form-container');
    formContainer.style.opacity = 1;
    formContainer.style.transform = 'translateY(0)';
});

// Handle form submission
const form = document.getElementById('contactForm');
const statusMessage = document.getElementById('status');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);

    try {
        // Send form data to the PHP file
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        // If submission is successful
        if (response.ok) {
            form.reset();
            statusMessage.innerText = 'Thank you! Your message has been sent.';
            statusMessage.style.color = 'green';
        } else {
            throw new Error('Submission failed');
        }
    } catch (error) {
        // Handle errors
        statusMessage.innerText = 'Oops! There was a problem submitting your message.';
        statusMessage.style.color = 'red';
    }
});

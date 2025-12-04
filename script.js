// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('form-response').innerHTML = '<p style="color:red;">Please fill in all fields.</p>';
    } else {
        document.getElementById('form-response').innerHTML = '<p style="color:green;">Thank you for your message! We will get back to you soon.</p>';
        // Reset the form
        document.getElementById('contact-form').reset();
    }
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

// Email Validation Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
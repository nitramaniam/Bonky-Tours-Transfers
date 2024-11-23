// script.js

document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Validate the inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // If all is well, submit the form (for now, we'll just log the data)
    alert('Form submitted successfully!');
    console.log({ name, email, message });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// script.js

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // EmailJS parameters
    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // Send email via EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function (response) {
            alert('Email sent successfully!');
            console.log('Success!', response.status, response.text);
        }, function (error) {
            alert('Failed to send email. Please try again later.');
            console.log('Failed...', error);
        });
});


function sendEmail(e) {
    e.preventDefault();
    
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Using EmailJS - Make sure to include their SDK and configure your account
    // Add this in your HTML: <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
        .then(function() {
            alert('Email sent successfully!');
            document.getElementById('emailForm').reset();
        }, function(error) {
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('errorMessage').textContent = 'Failed to send email: ' + error.text;
        });
}


// Portfolio Website JavaScript

// Show welcome message in console
console.log("Portfolio Website Loaded Successfully");

// Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Simple validation
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Email validation
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if (!email.match(emailPattern)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Success message
            alert("Message sent successfully!");

            // Reset form
            form.reset();
        });
    }

});
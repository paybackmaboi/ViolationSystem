document.addEventListener('DOMContentLoaded', function() {
    // Login Modal Elements
    var loginButton = document.getElementById("login-btn");
    var loginModal = document.getElementById("login-modal");
    var closeModalButton = document.querySelector("#login-modal .close");
    var loginForm = document.getElementById("login-form");

    if (loginButton && loginModal && closeModalButton && loginForm) {
        // Open Modal
        loginButton.onclick = function() {
            loginModal.style.display = "block";
        }

        // Close Modal
        closeModalButton.onclick = function() {
            loginModal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == loginModal) {
                loginModal.style.display = "none";
            }
        }

        // Handle Form Submission
        loginForm.onsubmit = function(event) {
            event.preventDefault(); // Prevent the default form submission

            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            // Validate credentials
            if (username === 'admin' && password === 'roy123') {
                // Redirect to dashboard
                window.location.href = 'dashboard.html'; // Change this to your dashboard URL
            } else {
                alert('Invalid username or password.');
            }
        }
    }
});

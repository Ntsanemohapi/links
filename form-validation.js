document.getElementById("contactForm").addEventListener("submit", function(event) {
    let emailField = document.getElementById("email");
    if (!emailField.value.endsWith("@gmail.com")) {
        alert("Email must end with '@gmail.com'.");
        event.preventDefault();
    }
});

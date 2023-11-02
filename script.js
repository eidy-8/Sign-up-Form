function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirmPassword");

    if (password !== confirmPassword) {
        message.textContent = "* Passwords do not match";
        message.style.color = "#FF0000";
        passwordInput.style.borderColor = "#FF0000";
        confirmPasswordInput.style.borderColor = "#FF0000";
        return false;
    } 

    message.textContent = "";
    passwordInput.style.borderColor = "";
    confirmPasswordInput.style.borderColor = "";
    return true;
}


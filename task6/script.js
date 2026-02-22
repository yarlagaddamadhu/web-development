// LOGIN
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Login Successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid Credentials!");
    }
}

// CHECK EMAIL (Forgot Password)
function checkEmail() {
    const email = document.getElementById("forgotEmail").value;
    const storedEmail = localStorage.getItem("email");

    if (email === storedEmail) {
        window.location.href = "reset.html";
    } else {
        alert("Email not registered!");
    }
}

// RESET PASSWORD
function resetPassword() {
    const newPass = document.getElementById("newPassword").value;
    const confirmPass = document.getElementById("confirmPassword").value;

    if (newPass.length < 8) {
        alert("Password must be at least 8 characters!");
        return;
    }

    if (newPass !== confirmPass) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("password", newPass);
    alert("Password Updated Successfully!");
    window.location.href = "index.html";
}

// LOGOUT
function logout() {
    window.location.href = "index.html";
}

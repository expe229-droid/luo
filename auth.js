// ===== SIGNUP =====
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    };

    // Save user
    localStorage.setItem("elearnUser", JSON.stringify(user));

    alert("Account created successfully!");
    window.location.href = "login.html";
  });
}

// ===== LOGIN =====
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("elearnUser"));
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (email === savedUser.email && pass === savedUser.password) {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password!");
    }
  });
}

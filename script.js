const regForm = document.getElementById("regForm");
const successBox = document.getElementById("successBox");

regForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const course = document.getElementById("course").value;
  const genderEl = document.querySelector('input[name="gender"]:checked');
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Clear previous errors
  document.querySelectorAll(".err").forEach((el) => (el.textContent = ""));
  successBox.classList.add("hidden");

  let valid = true;

  if (fullName.length < 3) {
    document.getElementById("errName").textContent = "Enter a valid full name (min 3 chars).";
    valid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("errEmail").textContent = "Enter a valid email address.";
    valid = false;
  }

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    document.getElementById("errMobile").textContent = "Enter a valid 10-digit Indian mobile number.";
    valid = false;
  }

  if (!course) {
    document.getElementById("errCourse").textContent = "Please select your branch.";
    valid = false;
  }

  if (!genderEl) {
    document.getElementById("errGender").textContent = "Please select a gender.";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("errPass").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (password !== confirmPassword || !confirmPassword) {
    document.getElementById("errConfirm").textContent = "Passwords do not match.";
    valid = false;
  }

  if (valid) {
    const regId = "CSE26-" + Math.floor(1000 + Math.random() * 9000);
    successBox.innerHTML = `
      <strong>Registration Successful!</strong><br />
      Student: ${fullName} (${genderEl.value})<br />
      Course: ${course}<br />
      Generated Application ID: <strong>${regId}</strong>
    `;
    successBox.classList.remove("hidden");
    regForm.reset();
  }
});
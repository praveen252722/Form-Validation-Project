function validateForm() {
    const fullName = 
    document.getElementById("fullName").value.trim();
    const email =
     document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = 
    document.getElementById("confirmPassword").value.trim();


  
    let isValid = true;
  
    // Name Validation


    if (fullName.length < 4) {
      document.getElementById("nameError").textContent = "Name must be at least 8 characters.";
      isValid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }


  
    // Email Validation
    if (!email.includes("@")) {
      document.getElementById("emailError").textContent = "Enter a valid email.";
      isValid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }


  
    // Phonr Validation
    if (!/^\d{10}$/.test(phone)) {
      document.getElementById("phoneError").textContent = "Phone number must be 10 digits.";
      isValid = false;
    } else {
      document.getElementById("phoneError").textContent = "";
    }
  
    // Password Validation
    if (
      password.length < 8 ||
      password.toLowerCase() === "password" ||
      password.toLowerCase() === fullName.toLowerCase()
    ) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters and cannot be 'password' or your name.";
      isValid = false;
    } else {
      document.getElementById("passwordError").textContent = "";
    }
  
    // Confirm Password Validation
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
      isValid = false;
    } else {
      document.getElementById("confirmPasswordError").textContent = "";
    }
  
    return isValid;
  }
  
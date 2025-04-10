document.addEventListener("DOMContentLoaded", () => {
  // Dark mode toggle
  const toggleButton = document.getElementById("toggle-mode");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");

    if (document.body.classList.contains("night-mode")) {
      toggleButton.textContent = "Switch to Light Mode";
      localStorage.setItem("darkMode", "enabled");
    } else {
      toggleButton.textContent = "Switch to Night Mode";
      localStorage.setItem("darkMode", "disabled");
    }
  });

  // Check for saved dark mode preference
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("night-mode");
    toggleButton.textContent = "Switch to Light Mode";
  }

  // Form handling
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const savedName = document.getElementById("savedName");
    const savedEmail = document.getElementById("savedEmail");
    const clearDataButton = document.getElementById("clearData");

    // Load saved data when the page loads
    if (localStorage.getItem("userName")) {
      savedName.textContent = "Name: " + localStorage.getItem("userName");
      savedEmail.textContent = "Email: " + localStorage.getItem("userEmail");
    }

    signupForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim(); // Not saving password

      if (name && email) {
        // Save user data in localStorage
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);

        // Display saved data
        savedName.textContent = "Name: " + name;
        savedEmail.textContent = "Email: " + email;
        alert("Sign-up successful! Data saved.");

        // Clear input fields after saving
        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
      }
    });

    // Clear data button
    if (clearDataButton) {
      clearDataButton.addEventListener("click", () => {
        localStorage.clear();
        savedName.textContent = "";
        savedEmail.textContent = "";
        alert("Data cleared.");
      });
    }
  }
});
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
// clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); // run once at load

//typewriter
const text = "Business Solutions!";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

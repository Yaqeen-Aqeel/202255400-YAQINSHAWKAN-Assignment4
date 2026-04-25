document.addEventListener("DOMContentLoaded", function () {

    // ===== Greeting Function =====
    function showGreeting(name = "") {
        const greetingElement = document.getElementById("greeting-message");
        if (!greetingElement) return;

        const currentHour = new Date().getHours();
        let greetingText;

        if (currentHour < 12) {
            greetingText = "Good Morning ☀️";
        } else if (currentHour < 18) {
            greetingText = "Good Afternoon 🌤️";
        } else {
            greetingText = "Good Evening 🌙";
        }

        greetingElement.textContent = name
            ? `${greetingText}, ${name}! Welcome to my portfolio!`
            : `${greetingText}! Welcome to my portfolio!`;
    }

    // ===== Show Temporary Message =====
    function showTempMessage(message, duration = 9000) {
        const tempMsg = document.getElementById("temp-message");
        if (!tempMsg) return;

        tempMsg.textContent = message;
        tempMsg.style.display = "block";

        // Trigger fade-in
        setTimeout(() => {
            tempMsg.style.opacity = "1";
        }, 10);

        // Fade-out after duration
        setTimeout(() => {
            tempMsg.style.opacity = "0";
            // Hide after fade-out completes
            setTimeout(() => {
                tempMsg.style.display = "none";
            }, 500); // match transition duration
        }, duration);
    }

    // ===== Check User (Show Modal or Greeting) =====
    const modal = document.getElementById("name-modal");
    function checkUser() {
        const savedName = localStorage.getItem("username");
        if (savedName) {
            showGreeting(savedName);
        } else if (modal) {
            modal.style.display = "flex";
        }
    }

    // ===== Save Name Button =====
    const saveBtn = document.getElementById("save-name");
    if (saveBtn) {
        saveBtn.addEventListener("click", function () {
            const nameInputElement = document.getElementById("name-input");
            if (!nameInputElement || !modal) return;

            const nameInput = nameInputElement.value.trim();

            if (nameInput === "") {
                alert("Please enter your name!");
                return;
            }

            localStorage.setItem("username", nameInput);
            modal.style.display = "none";
            showGreeting(nameInput);
        });
    }

    // ===== Modal Controls =====
    const closeBtn = document.querySelector(".close-btn");

    function handleModalClose() {
        modal.style.display = "none";
        const savedName = localStorage.getItem("username");
        showGreeting(savedName || "");
        if (!savedName) {
            showTempMessage("Your name was not saved! Please enter your name through the 'Change Name' button.");
        }
    }

    // Close with X
    if (closeBtn && modal) {
        closeBtn.addEventListener("click", handleModalClose);
    }

    // Close when clicking outside
    if (modal) {
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                handleModalClose();
            }
        });
    }

    // Close with ESC key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal && modal.style.display === "flex") {
            handleModalClose();
        }
    });

    // ===== Change Name Button =====
    const changeNameBtn = document.getElementById("change-name-btn");
    if (changeNameBtn && modal) {
        changeNameBtn.addEventListener("click", function () {
            modal.style.display = "flex";
            document.getElementById("name-input").value = ""; // reset input
        });
    }

    // ===== Initialize =====
    checkUser();

    // ===== Contact Form Validation with fade and red borders =====
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Remove previous error highlights
        const inputs = contactForm.querySelectorAll("input, textarea");
        inputs.forEach(input => input.classList.remove("error-border"));

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let hasError = false;

        // Highlight invalid fields
        if (name === "") {
            document.getElementById("name").classList.add("error-border");
            hasError = true;
        }
        if (email === "" || !emailRegex.test(email)) {
            document.getElementById("email").classList.add("error-border");
            hasError = true;
        }
        if (message === "") {
            document.getElementById("message").classList.add("error-border");
            hasError = true;
        }

        // Show error or success
        if (hasError) {
            formMessage.textContent = "Please correct the highlighted fields.";
            formMessage.className = "form-message error";
        } else {
            formMessage.textContent = "Your message has been sent successfully!";
            formMessage.className = "form-message success";
            contactForm.reset();
        }

        // Show message with fade-in
        formMessage.style.display = "block";
        setTimeout(() => formMessage.style.opacity = "1", 10);

        // Hide message after 3 seconds with fade-out
        setTimeout(() => {
            formMessage.style.opacity = "0";
            setTimeout(() => formMessage.style.display = "none", 500);
        }, 3000);
    });
}

// ===== Inspirational Quotes =====
const quoteBtn = document.getElementById("new-quote-btn");

if (quoteBtn) {
    quoteBtn.addEventListener("click", function () {

        const quoteText = document.getElementById("quote-text");
        const quoteAuthor = document.getElementById("quote-author");

        quoteText.innerHTML = "Loading...";
        quoteAuthor.innerHTML = "";

        fetch("https://dummyjson.com/quotes/random")
            .then(response => response.json())
            .then(data => {
                quoteText.innerHTML = `"${data.quote}"`;
                quoteAuthor.innerHTML = `— ${data.author}`;
            })
            .catch(error => {
                console.error("Error fetching quote:", error);
                quoteText.innerHTML = "Oops! Could not load a quote.";
                quoteAuthor.innerHTML = "";
            });
    });

    // Load quote automatically when page opens
    quoteBtn.click();
}


// ===== Visit Duration Counter =====
let seconds = 0;

function updateTimer() {
    seconds++;

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    let display = "";

    if (hrs > 0) {
        display = `${hrs}h ${mins}m ${secs}s`;
    } else if (mins > 0) {
        display = `${mins}m ${secs}s`;
    } else {
        display = `${secs}s`;
    }

    const timerDisplay = document.getElementById("timer-display");
    if (timerDisplay) {
        timerDisplay.textContent = display;
    }
}

setInterval(updateTimer, 1000);

}); 
   
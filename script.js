// Function to handle login
function login() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");

    // Simulated login process (replace with actual authentication logic)
    if (username === "admin" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Login failed! Please check your credentials.");
    }
}

// Function to handle sign up
function signUp() {
    const username = prompt("Choose a username:");
    const password = prompt("Choose a password:");

    // Simulated sign-up process (replace with actual registration logic)
    alert(`Sign up successful! Welcome, ${username}!`);
}

// Add event listeners to buttons
document.querySelector('.buttons button:nth-child(1)').addEventListener('click', login); // Log in button
document.querySelector('.buttons button:nth-child(2)').addEventListener('click', signUp); // Sign up button



function navigateTo(section) {
    alert(`Navigating to ${section}`);
    // Here you can add logic to scroll to a specific section or load a new page
}

// Add event listeners to navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const section = link.textContent; // Get the text of the clicked link
        navigateTo(section); // Call the navigate function
    });
});
// Function to toggle the login/signup modal
function toggleModal(modalType) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    if (modalType === 'login') {
        modalContent.innerHTML = `
            <h2>Login</h2>
            <form id="login-form">
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Password" required>
                <button type="submit">Login</button>
                <button type="button" onclick="closeModal()">Close</button>
            </form>
        `;
    } else if (modalType === 'signup') {
        modalContent.innerHTML = `
            <h2>Sign Up</h2>
            <form id="signup-form">
                <input type="text" placeholder="Username" required>
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Password" required>
                <button type="submit">Sign Up</button>
                <button type="button" onclick="closeModal()">Close</button>
            </form>
        `;
    }
    
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Event listeners for login and signup buttons
document.querySelector('.buttons button:nth-child(1)').addEventListener('click', () => toggleModal('login'));
document.querySelector('.buttons button:nth-child(2)').addEventListener('click', () => toggleModal('signup'));

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}
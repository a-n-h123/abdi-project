// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to my friend's website!");

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

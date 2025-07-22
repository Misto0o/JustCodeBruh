// Kingmode's Coding Camp Website
// Created by Kristian Cook
// Date: 2025-07 - 22
// Not for web display, just for flexing in the source file 😉

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar-burger');
  const menu = document.getElementById(burger.dataset.target);

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

const form = document.getElementById('signupForm');
const classSelection = document.getElementById('class-selection');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const userName = document.getElementById('name').value.trim();
  const userEmail = document.getElementById('email').value.trim();
  const selectedClass = classSelection.value;
  const userMessage = document.getElementById('message').value.trim();
  const userQuestion = document.getElementById('question').value.trim();

  if (!userName || !userEmail || !selectedClass || !userMessage) {
    alert('Please fill out all required fields.');
    return;
  }

  console.log(`Name: ${userName}`);
  console.log(`Email: ${userEmail}`);
  console.log(`Class: ${selectedClass}`);
  console.log(`Message: ${userMessage}`);
  console.log(`Question: ${userQuestion}`);

  alert(`Thank you, ${userName}! You've successfully enrolled in the "${selectedClass}" class.\nCheck your email (${userEmail}) for next steps.`);

  form.reset();
});
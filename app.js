// app.js

// Sign‑up form
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name     = document.getElementById('signup-name').value;
  const email    = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  const res  = await fetch('http://localhost:8000/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });
  const data = await res.json();
  console.log(data);
  // …handle success or error…
});

// Login form
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email    = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const res  = await fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  console.log(data);
  // …handle login success or error…
});

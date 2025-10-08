export function handleLogin() {
  const form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // simple demo login (replace with real auth later)
    const email = form.querySelector('input[type="email"]').value;
    alert(`(Demo) Logged in as ${email}. Real authentication to be added.`);
  });
}
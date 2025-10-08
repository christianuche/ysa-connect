export function renderNav() {
  const nav = document.getElementById("nav");
  nav.innerHTML = `
    <nav class="navbar">
      <a href="/index.html" class="logo"><img src="/public/assets/logo.png" width="50px" height="50px"></a>
      <ul class="nav-links">
        <li><a href="/src/pages/home.html">Home</a></li>
        <li><a href="/src/pages/events.html">Events</a></li>
        <li><a href="/src/pages/login.html">Login</a></li>
      </ul>
    </nav>
  `;
}

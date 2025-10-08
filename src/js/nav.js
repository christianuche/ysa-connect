export function renderNav() {
  const nav = document.getElementById("nav");
  nav.innerHTML = `
    <nav class="navbar">
      <a href="/index.html" class="logo"><img src="/images/logos/logo.png" width="50px" height="50px"></a>
      <ul class="nav-links">
        <li><a href="/home_page/index.html">Home</a></li>
        <li><a href="/event_page/index.html">Events</a></li>
        <li><a href="/login_page/index.html">Login</a></li>
      </ul>
    </nav>
  `;
}

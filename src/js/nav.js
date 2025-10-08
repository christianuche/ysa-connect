export function loadNav(navigateTo) {
  const nav = document.getElementById('nav');
  nav.innerHTML = `
    <nav class="navbar">
      <div class="nav-left">
        <img src="/assets/logo.png" alt="YSA Logo" class="logo" />
        <a href="#" id="homeLink" class="brand">YSA Connect</a>
      </div>
      <ul class="nav-links">
        <li><a href="#" id="eventsLink">Events</a></li>
        <li><a href="#" id="loginLink">Login</a></li>
      </ul>
    </nav>
  `;

  // attach listeners
  nav.querySelector('#homeLink').addEventListener('click', (e) => { e.preventDefault(); navigateTo('home'); });
  nav.querySelector('#eventsLink').addEventListener('click', (e) => { e.preventDefault(); navigateTo('events'); });
  nav.querySelector('#loginLink').addEventListener('click', (e) => { e.preventDefault(); navigateTo('login'); });
}

export function loadFooter() {
  const footer = document.getElementById('footer');
  footer.innerHTML = `
    <div class="footer-inner">
      <p>© ${new Date().getFullYear()} YSA Connect</p>
    </div>
  `;
}
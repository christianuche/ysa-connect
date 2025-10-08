import { loadNav, loadFooter } from './js/nav.js';
import { loadEvents } from './js/events.js';
import { handleLogin } from './js/auth.js';

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
  loadNav(navigateTo); // pass navigate function to nav
  loadFooter();
  navigateTo('home');
});

// navigateTo loads a page fragment and then runs its initializer (if any)
export async function navigateTo(page) {
  try {
    const res = await fetch(`/src/pages/${page}.html`);
    if (!res.ok) throw new Error('Page not found: ' + page);
    const html = await res.text();
    document.getElementById('app').innerHTML = html;

    // page-specific initializers
    const initMap = {
      events: loadEvents,
      login: handleLogin,
      home: () => {}
    };

    if (initMap[page]) initMap[page]();
  } catch (err) {
    document.getElementById('app').innerHTML = `<p>Error loading page: ${err.message}</p>`;
  }
}
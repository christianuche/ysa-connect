(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.getElementById(`nav`);e.innerHTML=`
    <nav class="navbar">
      <a href="/index.html" class="logo"><img src="/public/assets/logo.png" width="50px" height="50px"></a>
      <ul class="nav-links">
        <li><a href="/src/pages/home.html">Home</a></li>
        <li><a href="/src/pages/events.html">Events</a></li>
        <li><a href="/src/pages/login.html">Login</a></li>
      </ul>
    </nav>
  `}document.addEventListener(`DOMContentLoaded`,()=>{e();let t=document.getElementById(`footer`);t.innerHTML=`
    <p>&copy; ${new Date().getFullYear()} YSA Connect. Created by Christian Uche.</p>
  `}),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelectorAll(`.slide`),t=document.querySelectorAll(`.dot`),n=0;function r(n){e.forEach((e,r)=>{e.classList.toggle(`active`,r===n),t[r].classList.toggle(`active`,r===n)})}function i(){n=(n+1)%e.length,r(n)}setInterval(i,5e3),t.forEach((e,t)=>{e.addEventListener(`click`,()=>{n=t,r(n)})})});
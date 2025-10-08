function e(){let e=document.getElementById(`nav`);e.innerHTML=`
    <nav class="navbar">
      <a href="/index.html" class="logo"><img src="/images/logos/logo.png" width="50px" height="50px"></a>
      <ul class="nav-links">
        <li><a href="/home_page/index.html">Home</a></li>
        <li><a href="/event_page/index.html">Events</a></li>
        <li><a href="/login_page/index.html">Login</a></li>
      </ul>
    </nav>
  `}document.addEventListener(`DOMContentLoaded`,()=>{e();let t=document.getElementById(`footer`);t.innerHTML=`
    <p>&copy; ${new Date().getFullYear()} YSA Connect. Created by Christian Uche.</p>
  `}),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelectorAll(`.slide`),t=document.querySelectorAll(`.dot`),n=0;function r(n){e.forEach((e,r)=>{e.classList.toggle(`active`,r===n),t[r].classList.toggle(`active`,r===n)})}function i(){n=(n+1)%e.length,r(n)}setInterval(i,5e3),t.forEach((e,t)=>{e.addEventListener(`click`,()=>{n=t,r(n)})})});
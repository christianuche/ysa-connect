import { getEvents } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const eventList = document.getElementById("event-list");
  const events = await getEvents();

  if (events.length === 0) {
    eventList.innerHTML = "<p>No upcoming events at the moment.</p>";
    return;
  }

  eventList.innerHTML = events.map(event => `
    <div class="event-card">
      <h3>${event.title}</h3>
      <p>${event.date} — ${event.location}</p>
      <p>${event.description}</p>
    </div>
  `).join("");
});

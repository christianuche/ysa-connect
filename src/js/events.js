// Load existing events on page load
document.addEventListener("DOMContentLoaded", displayEvents);

const fileInput = document.getElementById("eventImageUpload");
const imagePreview = document.getElementById("imagePreview");

// Show image preview when a user selects an image
fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview" />`;
    };
    reader.readAsDataURL(file);
  } else {
    imagePreview.innerHTML = "No image selected";
  }
});

// Handle form submission
document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("eventName").value.trim();
  const date = document.getElementById("eventDate").value;
  const description = document.getElementById("eventDesc").value.trim();

  if (!name || !date || !description) {
    alert("Please fill in all required fields.");
    return;
  }

  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      saveEvent(name, date, event.target.result, description);
    };
    reader.readAsDataURL(file);
  } else {
    saveEvent(name, date, "https://via.placeholder.com/300x200?text=No+Image", description);
  }
});

// Save new event
function saveEvent(name, date, image, description) {
  const newEvent = {
    id: Date.now(),
    name,
    date,
    image,
    description,
  };

  let events = JSON.parse(localStorage.getItem("events")) || [];
  events.push(newEvent);
  localStorage.setItem("events", JSON.stringify(events));

  document.getElementById("eventForm").reset();
  imagePreview.innerHTML = "No image selected"; // reset preview
  displayEvents();
  alert("Event added successfully!");
}

// Display events dynamically
function displayEvents() {
  const eventsContainer = document.getElementById("events-list");
  const events = JSON.parse(localStorage.getItem("events")) || [];

  if (events.length === 0) {
    eventsContainer.innerHTML = "<p>No upcoming events yet. Add one below!</p>";
    return;
  }

  eventsContainer.innerHTML = events
    .map(
      (event) => `
      <div class="event-card">
        <img src="${event.image}" alt="${event.name}" />
        <div class="event-card-content">
          <h4>${event.name}</h4>
          <p><strong>Date:</strong> ${event.date}</p>
          <p>${event.description}</p>
          <button onclick="deleteEvent(${event.id})" class="delete-btn">🗑️ Delete</button>
        </div>
      </div>
    `
    )
    .join("");
}

// Delete event
window.deleteEvent = function (id) {
  let events = JSON.parse(localStorage.getItem("events")) || [];
  events = events.filter((e) => e.id !== id);
  localStorage.setItem("events", JSON.stringify(events));
  displayEvents();
};
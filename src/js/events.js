export function loadEvents() {
  const events = [
    { id: 1, name: 'Beach Devotional', date: '2025-10-12', notes: 'Bring a blanket' },
    { id: 2, name: 'Game Night', date: '2025-10-18', notes: 'Snacks welcome' },
    { id: 3, name: 'Temple Trip', date: '2025-10-25', notes: 'Meet at 7AM' }
  ];

  const list = document.getElementById('eventList');
  if (!list) return;
  list.innerHTML = events.map(e => `\n    <li class="event-item">\n      <strong>${e.name}</strong> — <span class="date">${e.date}</span>\n      <p class="notes">${e.notes}</p>\n    </li>`).join('');
}
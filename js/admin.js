import { getEvents, createEvent, deleteEvent } from './services/eventService.js';
import { getResponses } from './services/responseService.js';
import { toSlug, esc } from './utils/helpers.js';
import { computeScore } from './utils/score.js';

async function loadEvents() {
  try {
    const events = await getEvents();
    const container = document.getElementById("eventList");
    container.innerHTML = "";

    for (const event of events) {
      const url = `${location.origin}/?event=${event.id}`;

      const el = document.createElement("div");
      el.innerHTML = `
        <div class="event-card">
          <b>${esc(event.name)}</b>
          <small>${url}</small>
          <button onclick="removeEvent('${event.id}')">Supprimer</button>
        </div>
      `;

      container.appendChild(el);
    }

  } catch (err) {
    console.error(err);
  }
}

window.removeEvent = async (id) => {
  await deleteEvent(id);
  loadEvents();
};

window.createEventUI = async () => {
  const input = document.getElementById("eventNameInput");
  const name = input.value.trim();

  if (!name) return;

  try {
    await createEvent(name, null, toSlug(name));
    input.value = "";
    loadEvents();
  } catch (e) {
    console.error(e);
  }
};

loadEvents();


// Config
// ========================================================
const API_URL = 'http://localhost:3000/api';

// Functions
// ========================================================
const requests = {
  BROKEN: async (payload, callback) => {
    const response = await fetch(`${API_URL}/doesntwork`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (callback) {
      callback(data);
    }
  },
  WORKS: async (payload, callback) => {
    const response = await fetch(`${API_URL}/works`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (callback) {
      callback(data);
    }
  },
};

// Init
// ========================================================
/**
 * When window is loaded
 */
window.onload = () => {
  console.group('Window loaded');

  // Elements
  const worksForm = document.getElementById('works-post-form');
  const worksResult = document.getElementById('works-post-result');
  const brokenForm = document.getElementById('broken-post-form');
  const brokenResult = document.getElementById('broken-post-result');

  worksForm.addEventListener('submit', (event) => {
    event.preventDefault();
    requests.WORKS(JSON.parse(event.currentTarget.payload.value), (data) => {
      worksResult.innerHTML = JSON.stringify(data, null, 2);
    });
  });

  brokenForm.addEventListener('submit', (event) => {
    event.preventDefault();
    requests.BROKEN(JSON.parse(event.currentTarget.payload.value), (data) => {
      brokenResult.innerHTML = JSON.stringify(data, null, 2);
    });
  });

  console.groupEnd();
};

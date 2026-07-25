// Consolidated API Service Layer for Sri Lanka Tourism

// --- DESTINATIONS API ---
export async function fetchDestinations(params = {}) {
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`/api/destinations${query ? `?${query}` : ''}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.error('Error fetching destinations API:', err);
    throw err;
  }
}

export async function fetchDestinationBySlug(slug) {
  try {
    const res = await fetch(`/api/destinations/${slug}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error(`Error fetching destination ${slug}:`, err);
    throw err;
  }
}

// --- REVIEWS API ---
export async function fetchReviews(destinationId) {
  try {
    const res = await fetch(`/api/destinations/${destinationId}/reviews`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.error(`Error fetching reviews for ${destinationId}:`, err);
    return [];
  }
}

export async function submitReview(destinationId, reviewData) {
  try {
    const res = await fetch(`/api/destinations/${destinationId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    });

    if (!res.ok) {
      const errJson = await res.json();
      throw new Error(errJson.message || `HTTP error! Status: ${res.status}`);
    }

    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error(`Error submitting review for ${destinationId}:`, err);
    throw err;
  }
}

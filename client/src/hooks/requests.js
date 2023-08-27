const API_URL = 'http://localhost:4000';

async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) =>{
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  try { // used if the status code isn't set
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch), // sending launch data to API
    });    
  } catch (err) {
    return {
      ok: false, // returns error in uselaunches::abortLaunch::useCallback::success
    };
  }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try { // used if the status code isn't set
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    });    
  } catch (err) {
    console.log(err);
    return {
      ok: false, // returns error in uselaunches::abortLaunch::useCallback::success
    };
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};

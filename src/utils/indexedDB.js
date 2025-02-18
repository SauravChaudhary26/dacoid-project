import { get, set } from 'idb-keyval';

const HISTORY_KEY = 'quiz_history';

export async function saveAttempt(attempt) {
  try {
    const history = (await get(HISTORY_KEY)) || [];
    history.push(attempt);
    await set(HISTORY_KEY, history);
  } catch (error) {
    console.error("Error saving attempt", error);
  }
}

export async function getAttempts() {
  try {
    return (await get(HISTORY_KEY)) || [];
  } catch (error) {
    console.error("Error fetching attempts", error);
    return [];
  }
}

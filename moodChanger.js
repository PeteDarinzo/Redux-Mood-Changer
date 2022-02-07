

const h1 = document.querySelector("h1");
const happyButton = document.querySelector("#happy");
const sleepyButton = document.querySelector("#sleeping");
const confusedButton = document.querySelector("#confused");
const devilishButton = document.querySelector("#devilish");
const randomButton = document.querySelector("#random");

const MOODS = ["HAPPY", "SLEEPING", "CONFUSED", "DEVILISH"];

happyButton.addEventListener("click", () => {
  store.dispatch({ type: "HAPPY" });
  const state = store.getState();
  h1.innerText = state.emoji;
});

sleepyButton.addEventListener("click", () => {
  store.dispatch({ type: "SLEEPING" });
  const state = store.getState();
  h1.innerText = state.emoji;
});

confusedButton.addEventListener("click", () => {
  store.dispatch({ type: "CONFUSED" });
  const state = store.getState();
  h1.innerText = state.emoji;
});

devilishButton.addEventListener("click", () => {
  store.dispatch({ type: "DEVILISH" });
  const state = store.getState();
  h1.innerText = state.emoji;
})

randomButton.addEventListener("click", () => {
  const randomChoice = Math.floor(Math.random() * 4);
  store.dispatch({ type: MOODS[randomChoice] });
  const state = store.getState();
  h1.innerText = state.emoji;
})

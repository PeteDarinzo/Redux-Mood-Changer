

const h1 = document.querySelector("h1");
const happyButton = document.querySelector("#happy");
const sleepyButton = document.querySelector("#sleeping");
const confusedButton = document.querySelector("#confused");
const devilishButton = document.querySelector("#devilish");
const randomButton = document.querySelector("#random");

const MOODS = { "HAPPY": "＼(＾▽＾)／", "SLEEPING": "(ᴗ˳ᴗ)", "CONFUSED": "ఠ_ఠ", "DEVILISH": "( ｀▽´ )Ψ" };

happyButton.addEventListener("click", () => {
  store.dispatch({ type: "HAPPY", payload: MOODS.HAPPY });
  const state = store.getState();
  h1.innerText = state.emoji;
});

sleepyButton.addEventListener("click", () => {
  store.dispatch({ type: "SLEEPING", payload: MOODS.SLEEPING });
  const state = store.getState();
  h1.innerText = state.emoji;
});

confusedButton.addEventListener("click", () => {
  store.dispatch({ type: "CONFUSED", payload: MOODS.CONFUSED });
  const state = store.getState();
  h1.innerText = state.emoji;
});

devilishButton.addEventListener("click", () => {
  store.dispatch({ type: "DEVILISH", payload: MOODS.DEVILISH });
  const state = store.getState();
  h1.innerText = state.emoji;
})

randomButton.addEventListener("click", () => {
  const randomChoice = Math.floor(Math.random() * 4);
  const mood = (Object.keys(MOODS))[randomChoice];
  store.dispatch({ type: mood, payload: MOODS[mood] });
  const state = store.getState();
  h1.innerText = state.emoji;
})

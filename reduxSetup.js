
const INTIIAL_STATE = { emoji: "(^人^)" };

const emojiReducer = (state = INTIIAL_STATE, action) => {
  switch (action.type) {
    case "HAPPY":
      return { ...state, emoji: "＼(＾▽＾)／" };
    case "CONFUSED":
      return { ...state, emoji: "ఠ_ఠ" };
    case "SLEEPING":
      return { ...state, emoji: "(ᴗ˳ᴗ)" };
    case "DEVILISH":
      return { ...state, emoji: "( ｀▽´ )Ψ" };
    default:
      return state;
  }
}



const store = Redux.createStore(emojiReducer);
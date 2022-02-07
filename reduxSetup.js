
const INTIIAL_STATE = { emoji: "(^人^)" };

const emojiReducer = (state = INTIIAL_STATE, action) => {
  switch (action.type) {
    case "HAPPY":
      return { ...state, emoji: action.payload };
    case "CONFUSED":
      return { ...state, emoji: action.payload };
    case "SLEEPING":
      return { ...state, emoji: action.payload };
    case "DEVILISH":
      return { ...state, emoji: action.payload };
    default:
      return state;
  }
}



const store = Redux.createStore(emojiReducer);

const INTIIAL_STATE = { emoji: "(^人^)" };

const emojiReducer = (state = INTIIAL_STATE, action) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, emoji: action.payload };
    default:
      return state;
  }
}



const store = Redux.createStore(emojiReducer);
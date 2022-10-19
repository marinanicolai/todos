export const INITIAL_STATE = {
  task: "",
  ranks: [],
  complete: "",
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_RANK":
      return {
        ...state,
        ranks: [...state.ranks, action.payload],
      };
    case "REMOVE_RANK":
      return {
        ...state,
        ranks: state.ranks.filter((rank) => rank !== action.payload),
      };
    default:
      return state;
  }
};

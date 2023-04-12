import {
  DUMMY_ACTION,
  FETCH_TASKS_RESOLVED,
} from "../actionConstants/actionConstants";

const initialState = {
  data: "",
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_RESOLVED:
      return {
        ...state,
        tasks: action.payload,
      };

    case DUMMY_ACTION:
      return {
        ...state,
        data: "Hello",
      };
    default:
      return state;
  }
};

export default reducer;

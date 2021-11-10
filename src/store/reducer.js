import { SET_TOPSTORY_LIST } from "./constants";

const initialState = {
  storylist: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOPSTORY_LIST:
      return {
        ...state,
        storylist: action.payload
      };
  }
  return state;
};

export default reducer;

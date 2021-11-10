import { SET_TOPSTORY_LIST, SET_ITEM } from "./constants";

const initialState = {
  storylist: {},
  setitem: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOPSTORY_LIST:
      return {
        ...state,
        storylist: action.payload
      };
    case SET_ITEM:
      return {
        ...state,
        setitem: action.payload
      };
  }
  return state;
};

export default reducer;

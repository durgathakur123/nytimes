import { SET_TOPSTORY_LIST } from "./constants";

const initialState = {
  doglist: {},
  dogimagelist:{}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOPSTORY_LIST:
      return {
        ...state,
        doglist: action.payload
      };
  }
  return state;
};

export default reducer;

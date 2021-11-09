import {
  SET_DOG_LIST,
  SET_DOG_BREED_BY_NAME_IMAGE_LIST
} from "./constants";

const initialState = {
  doglist: {},
  dogimagelist:{}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOG_LIST:
      return {
        ...state,
        doglist: action.payload
      };
    case SET_DOG_BREED_BY_NAME_IMAGE_LIST:
      return {
        ...state,
        dogimagelist: action.payload
      };
  }
  return state;
};

export default reducer;

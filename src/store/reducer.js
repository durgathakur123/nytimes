import { SET_TOPSTORY_LIST, SET_ITEM,LOGIN_SUCCESS,LOGOUT_SUCCESS,ERROR_MSG } from "./constants";

const initialState = {
  storylist: {},
  setitem: {},
  isLogin: false,
  isLogout:false,
  errormsg:''
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
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: action.payload
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogout: action.payload
      };
    case ERROR_MSG:
      return {
        ...state,
        isLogout: action.payload
      };
  }
  return state;
};

export default reducer;

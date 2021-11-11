import {
  GET_TOPSTORY_LIST,
  SET_TOPSTORY_LIST,
  SET_ITEM,
  USER_LOGIN,
  LOGIN_SUCCESS,
  USER_SIGNUP,
  LOGOUT,
  LOGOUT_SUCCESS,
  ERROR_MSG
} from "./constants";

export function getStoryList(payload) {
  return {
    type: GET_TOPSTORY_LIST,
    payload
  };
}

export function setStoryList(payload) {
  return {
    type: SET_TOPSTORY_LIST,
    payload
  };
}

export function setItem(payload) {
  return {
    type: SET_ITEM,
    payload
  };
}
export function login(payload) {
  console.log('3012 ac', payload)
  return {
    type: USER_LOGIN,
    payload
  };
}
export function loginsuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
}
export function signup(payload) {
  return {
    type: USER_SIGNUP,
    payload
  };
}
export function logout() {
  return {
    type: LOGOUT,
    
  };
}
export function logoutsuccess(payload) {
  return {
    type: LOGOUT_SUCCESS,
    payload
  };
}
export function errormsg(payload) {
  return {
    type: ERROR_MSG,
    payload
  };
}

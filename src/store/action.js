import {
  GET_TOPSTORY_LIST,
  SET_TOPSTORY_LIST,
  SET_ITEM
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

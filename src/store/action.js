import {
  GET_TOPSTORY_LIST,
  SET_TOPSTORY_LIST
} from "./constants";

export function getStoryList(payload) {
  return {
    type: GET_TOPSTORY_LIST,
    payload
  };
}
export function setTopStoriesListScience(payload) {
  return {
    type: SET_TOPSTORY_LIST,
    payload
  };
}


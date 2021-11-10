import {
  classNameGET_TOPSTORY_LIST,
  SET_TOPSTORY_LIST
} from "./constants";

export function getDogList(payload) {
  return {
    type: classNameGET_TOPSTORY_LIST,
    payload
  };
}
export function setTopStoriesListScience(payload) {
  return {
    type: SET_TOPSTORY_LIST,
    payload
  };
}


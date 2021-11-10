import {
  GET_TOPSTORIE_LIST_SCIENCE,
  SET_TOPSTORIE_LIST_SCIENCE,
  GET_DOG_BREED_BY_NAME,
  SET_DOG_BREED_BY_NAME_IMAGE_LIST
} from "./constants";

export function getDogList(payload) {
  return {
    type: GET_TOPSTORIE_LIST_SCIENCE,
    payload
  };
}
export function setTopStoriesListScience(payload) {
  return {
    type: SET_TOPSTORIE_LIST_SCIENCE,
    payload
  };
}
export function getDogBreedByName(payload) {
  return {
    type: GET_DOG_BREED_BY_NAME,
    payload
  };
}
export function setDogBreedByNameImageList(payload) {
  return {
    type: SET_DOG_BREED_BY_NAME_IMAGE_LIST,
    payload
  };
}


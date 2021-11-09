import {
  GET_DOG_LIST,
  SET_DOG_LIST,
  GET_DOG_BREED_BY_NAME,
  SET_DOG_BREED_BY_NAME_IMAGE_LIST
} from "./constants";

export function getDogList() {
  return {
    type: GET_DOG_LIST,
  };
}
export function setDogList(payload) {
  return {
    type: SET_DOG_LIST,
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


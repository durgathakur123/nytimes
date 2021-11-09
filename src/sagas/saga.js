import { takeEvery, put, call, takeLastest } from "redux-saga/effects";
import axios from "axios";
import {
  setDogList,
  setDogBreedByNameImageList
} from "../store/action";

async function getData(url) {
  try {
    return new Promise(function(resolve) {
      axios
        .get(url)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          // return error;
        });
    });
  } catch (err) {}
}

function* fetchDogList(action) {
  const res = yield call(getData, 'https://dog.ceo/api/breeds/list/all');
  yield put(setDogList(res.data.message));
}

function* fetchDogBreedByName(action) {
  const res = yield call(getData, `https://dog.ceo/api/breed/${action.payload}/images`);
 yield put(setDogBreedByNameImageList(res.data.message));
}

export function* mySaga() {
  yield takeEvery("GET_DOG_LIST", fetchDogList);
  yield takeEvery("GET_DOG_BREED_BY_NAME", fetchDogBreedByName);
}

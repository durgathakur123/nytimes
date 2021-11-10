import { takeEvery, put, call, takeLastest } from "redux-saga/effects";
import axios from "axios";
import {
  setTopStoriesListScience
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

function* fetchTopStoriesListScience(action) {
  console.log(action)
  const res = yield call(getData, `https://api.nytimes.com/svc/topstories/v2/${action.payload}.json?api-key=gJGeyC4DCijKHEHyC58UVpC485r7YSzz`);
  console.log(res.data.results)
  yield put(setTopStoriesListScience(res.data.results));
}

export function* mySaga() {
  yield takeEvery("classNameGET_TOPSTORY_LIST", fetchTopStoriesListScience);
}

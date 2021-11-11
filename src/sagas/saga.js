import { takeEvery, put, call, takeLastest } from "redux-saga/effects";
import axios from "axios";
import {
  setStoryList,
  loginsuccess,
  logout,
  logoutsuccess
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
async function postData(url, data) {
  try {
    return new Promise(function(resolve) {
      axios
        .post(url, data)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
        });
    });
  } catch (err) {}
}

function* fetchTopStoriesListScience(action) {
  console.log(action)
  const res = yield call(getData, `https://api.nytimes.com/svc/topstories/v2/${action.payload}.json?api-key=gJGeyC4DCijKHEHyC58UVpC485r7YSzz`);
  console.log(res.data.results)
  yield put(setStoryList(res.data.results));
}

function* userLogin(action){
const res = yield call(postData, 'http://localhost:8000/auth/login', action.payload);
if(res?.data?.access_token){
  yield localStorage.setItem("access_token", res.data.access_token);
  yield put(loginsuccess(true));
 }
}
function* userSignUp(action){
console.log(action)
const res = yield call(postData, 'http://localhost:8000/auth/register', action.payload);
if(res?.data?.access_token){
  yield localStorage.setItem("access_token", res.data.access_token);
  yield put(loginsuccess(true));
 }
}
function* logOut(){
if(localStorage.getItem('access_token')){
  yield localStorage.removeItem("access_token");
  yield put(logoutsuccess(true));
  yield put(loginsuccess(false));
 }
}

export function* mySaga() {
  yield takeEvery("GET_TOPSTORY_LIST", fetchTopStoriesListScience);
  yield takeEvery("USER_LOGIN", userLogin);
  yield takeEvery("USER_SIGNUP", userSignUp);
  yield takeEvery("LOGOUT", logOut);
}

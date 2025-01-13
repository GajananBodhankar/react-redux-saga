import axios, { AxiosResponse } from "axios";
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { failed, loading, setUserValue, success } from "./Slice";

async function apiCall(value: string) {
  try {
    let result = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${value}`
    );
    return result.data;
  } catch (error) {
    throw error;
  }
}
// remember store=>next=>action from customMiddleware
// this is the action which is a curried function
function* getApiCall(action: any) {
  try {
    // here call takes 2 args, a function and args. viz axios.get is a function and
    // the api is the argument
    let result: AxiosResponse = yield call(apiCall, action.payload);
    // for debouncing add the delay to the api call as shown below
    // yield delay(2000);
    if (result) {
      yield put(success(result));
    }
  } catch (error) {
    yield put(failed());
  }
}

export function* watchApiCall() {
  // takelatest's first arg is the one which will trigger
  // the entire redux saga, i.e if we dispatch(setUserValue(value)) from any where, then saga is triggered
  yield takeLatest(setUserValue, getApiCall);
}

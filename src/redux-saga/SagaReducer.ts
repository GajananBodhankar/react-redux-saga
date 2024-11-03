import axios, { AxiosResponse } from "axios";
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { failed, loading, success } from "./Slice";

function* getApiCall() {
  try {
    let result: AxiosResponse = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/todos"
    );
    // for debouncing add the delay to the api call as shown below
    // yield delay(2000);
    if (result.data) {
      yield put(success(result.data));
    }
  } catch (error) {
    yield put(failed());
  }
}

export function* watchApiCall() {
  yield takeLatest(loading, getApiCall);
}

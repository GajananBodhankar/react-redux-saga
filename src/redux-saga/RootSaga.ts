import { all, fork } from "redux-saga/effects";
import { watchApiCall } from "./SagaReducer";

function* RootSaga() {
  yield all([fork(watchApiCall)]);
}
export default RootSaga;

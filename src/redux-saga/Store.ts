import { configureStore } from "@reduxjs/toolkit";
import { SagaReducer } from "./Slice";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./RootSaga";
import { watchApiCall } from "./SagaReducer";
const sagaMiddleWare = createSagaMiddleware();
const Store = configureStore({
  reducer: {
    SagaReducer,
  },
  middleware: (getDafaultMiddleWare) =>
    getDafaultMiddleWare().concat(sagaMiddleWare),
});
// When we have multiple api calls, and you want to execute it simultaneously,
// then use all([fork(action)]) To yield all fork effects in Redux Saga, 
// you combine the all effect with an array of fork effects. This allows you to start multiple non-blocking sagas concurrently within a single parent saga.
// else you can use the takeLatest generator function in run()
sagaMiddleWare.run(watchApiCall);
export default Store;

export type AppStore = typeof Store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];

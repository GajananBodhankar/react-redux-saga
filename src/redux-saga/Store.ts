import { configureStore } from "@reduxjs/toolkit";
import { SagaReducer } from "./Slice";
import createSagaMiddleware from "redux-saga";
import RootSaga from "./RootSaga";
const sagaMiddleWare = createSagaMiddleware();
const Store = configureStore({
  reducer: {
    SagaReducer,
  },
  middleware: (getDafaultMiddleWare) =>
    getDafaultMiddleWare().concat(sagaMiddleWare),
});

sagaMiddleWare.run(RootSaga);
export default Store;

export type AppStore = typeof Store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];

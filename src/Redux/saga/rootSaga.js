import { all, fork } from "redux-saga/effects";
import watchFetchData from "./dataSaga";

// Root saga: combines all individual sagas
export default function* rootSaga() {
  yield all([fork(watchFetchData)]);
}

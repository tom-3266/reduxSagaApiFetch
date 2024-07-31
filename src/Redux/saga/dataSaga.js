import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { FETCH_DATA_REQUEST } from "../actionTypes/dataActionTypes";
import { fetchDataSuccess, fetchDataFail } from "../actions/dataActions";

function* fetchData() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}

function* watchFetchData() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchData);
}

export default watchFetchData;

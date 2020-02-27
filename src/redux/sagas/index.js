import { all } from "redux-saga/effects";

import auth from "./authSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([]);
}

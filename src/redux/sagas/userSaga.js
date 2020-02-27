import { takeLatest, call, put } from "redux-saga/effects";
import * as userAction from "../actions/userAction";
import rsf from "../rsf";
function* addUser({ payload: { firstName, lastName, email, userId } }) {
  console.log(firstName, lastName);
  try {
    yield put(userAction.createUserRequestAction());
    const doc = yield call(rsf.firestore.addDocument, "users", {
      firstName,
      lastName,
      email,
      userId
    });
    yield put(userAction.createUserSuccessAction());
  } catch (err) {
    console.log(err);
    yield put(userAction.createUserFailureAction());
  }
}

function* deleteUser({ userId }) {
  try {
    yield put(userAction.deleteUserRequestAction());
    yield call(rsf.firestore.deleteDocument, `users/${userId}`);
    yield put(userAction.deleteUserSuccessAction());
  } catch (err) {
    console.log(err);
    yield put(userAction.deleteUserFailureAction(err.message));
  }
}

export default [
  takeLatest("ADD_USER", addUser),
  takeLatest("DELETE_USER", deleteUser)
];

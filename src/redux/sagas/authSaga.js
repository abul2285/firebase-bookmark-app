import { takeLatest, put, call } from "redux-saga/effects";
import * as authAction from "../actions/authActions";
import rsf from "../rsf";

function* createUserSaga({ payload: { email, password } }) {
  try {
    console.log(email, password);
    const user = yield call(
      rsf.auth.createUserWithEmailAndPassword,
      email,
      password
    );
    // yield put(authAction.signUpSuccessAction(user));
    yield put({ type: "ADD_USER" });
    // yield put(createUserSuccess(user));
  } catch (error) {
    console.log(error);
    // yield put(createUserFailure(error));
  }
}

function* loginSaga({ payload: { email, password } }) {
  try {
    const data = yield call(
      rsf.auth.signInWithEmailAndPassword,
      email,
      password
    );
    yield put(authAction.loginSuccessAction(data));
  } catch (error) {
    yield put(authAction.loginFailureAction(error));
  }
}

export default [
  takeLatest("SIGNUP_USER", createUserSaga),
  takeLatest("LOGIN_USER", loginSaga)
];

import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const firebaseConfig = {
  apiKey: "AIzaSyDw7HYndHqUbWZ59S8X7KpFZ9ydPJlROEY",
  authDomain: "react-redux-project-47a90.firebaseapp.com",
  databaseURL: "https://react-redux-project-47a90.firebaseio.com",
  projectId: "react-redux-project-47a90",
  storageBucket: "react-redux-project-47a90.appspot.com",
  messagingSenderId: "709250451124",
  appId: "1:709250451124:web:d36e9ccc21ed8c43f879e1"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  enableClaims: true,
  profileFactory: (userData, profileData, firebase) => {
    const { user } = userData;
    return {
      email: user.email
    };
  }
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const initialState = {};
const store = createStore(rootReducer, initialState, enhancers);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

sagaMiddleware.run(rootSaga);

export default store;

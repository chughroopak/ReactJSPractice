import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
import { createStore, combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore"; // <- needed if using firestore

const fbConfig = {
  apiKey: "AIzaSyBqByIR2H-EKIdd-NCMYunF7AvnKrL4MIE",
  authDomain: "reduxpostit.firebaseapp.com",
  databaseURL: "https://reduxpostit.firebaseio.com",
  projectId: "reduxpostit",
  storageBucket: "reduxpostit.appspot.com",
  messagingSenderId: "624072344206",
  appId: "1:624072344206:web:3c6cb19c42fa51d710ffdf",
  measurementId: "G-NYRTKJ4LBR"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

firebase.firestore();

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

export default store;

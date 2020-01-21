import { createStore, combineReducers } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer, createFirestoreInstance } from "redux-firestore";
import notifyReducer from "./reducers/notifyReducer";

const firebaseConfig = {
  apiKey: "AIzaSyDB1OfyUqfFQByQtjBgf6yUMp7rTZ5vFo8",
  authDomain: "reactclientpanel-e62e8.firebaseapp.com",
  databaseURL: "https://reactclientpanel-e62e8.firebaseio.com",
  projectId: "reactclientpanel-e62e8",
  storageBucket: "reactclientpanel-e62e8.appspot.com",
  messagingSenderId: "622052870029",
  appId: "1:622052870029:web:13ebda6c8fe044e5399fc4",
  measurementId: "G-RFMSWENL58"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

//Init firebase instance
firebase.initializeApp(firebaseConfig);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer
});

//create initial state

const initialState = {};

//create store
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

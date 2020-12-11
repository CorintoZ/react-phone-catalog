import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';

export const fbConfig = {
  apiKey: 'AIzaSyDGbYCTy3bH01ezJMJ1biQorjWQc4gTYR8',
  authDomain: 'react-phone-catalog.firebaseapp.com',
  databaseURL: 'https://react-phone-catalog.firebaseio.com',
  projectId: 'react-phone-catalog',
  storageBucket: 'react-phone-catalog.appspot.com',
  messagingSenderId: '641706947339',
  appId: '1:641706947339:web:74acc5a28821c7e8ef280e',
};
export const fb = firebase.initializeApp(fbConfig);

export const db = fb.firestore().settings({ timestampsInSnapshots: true });

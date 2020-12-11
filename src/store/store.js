import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { phoneReducers } from './reducers/phoneReducers';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { fb, fbConfig } from '../firebase';
import { getFirebase } from 'react-redux-firebase';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    phone: phoneReducers,
  }),
  composeEnhancer(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(fb, fbConfig)
  )
);

export default store;

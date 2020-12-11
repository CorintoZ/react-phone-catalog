import './App.css';
import NavBar from './components/NavBar/NavBar';
import store from './store/store';
import Routes from './routes';

import { Provider } from 'react-redux';
import { createFirestoreInstance } from 'redux-firestore';
import { fbConfig } from './firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/app';

function App() {
  const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
  };
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <div className='App'>
          <NavBar />
          <Routes />
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;

import './App.css';
import PhoneList from './components/PhoneList/PhoneList';
import NavBar from './components/NavBar/NavBar';
import PhoneForm from './components/PhoneForm/PhoneForm';
import PhoneDetails from './components/PhoneDetails/PhoneDetails';

import firebase from 'firebase/app';
import 'firebase/firestore';
import { useLoading, ThreeDots } from '@agney/react-loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyDGbYCTy3bH01ezJMJ1biQorjWQc4gTYR8',
  authDomain: 'react-phone-catalog.firebaseapp.com',
  databaseURL: 'https://react-phone-catalog.firebaseio.com',
  projectId: 'react-phone-catalog',
  storageBucket: 'react-phone-catalog.appspot.com',
  messagingSenderId: '641706947339',
  appId: '1:641706947339:web:74acc5a28821c7e8ef280e',
});

const firestore = firebase.firestore();

function App() {
  const phonesRef = firestore.collection('phones');
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width='70' />,
  });
  const [phoneList, loading, error] = useCollectionData(
    phonesRef.orderBy('name'),
    {
      idField: 'id',
    }
  );
  console.log(phoneList);

  return (
    <Router>
      <div className='App'>
        <NavBar></NavBar>

        <Switch>
          <Route exact path='/'>
            {phoneList ? (
              <PhoneList phoneList={phoneList}></PhoneList>
            ) : (
              indicatorEl
            )}
          </Route>
          <Route path='/phones/add'>
            <PhoneForm phonesRef={phonesRef}></PhoneForm>
          </Route>
          <Route
            path='/phones/:id'
            render={({ match }) => (
              <PhoneDetails
                phoneDetails={phoneList.find(
                  (phone) => phone.id === match.params.id
                )}
              ></PhoneDetails>
            )}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

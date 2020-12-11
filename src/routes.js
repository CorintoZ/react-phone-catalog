import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PhoneForm from './components/PhoneForm/PhoneForm';
import PhoneDetails from './components/PhoneDetails/PhoneDetails';
import PhoneList from './components/PhoneList/PhoneList';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './services/history';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/'>
          <PhoneList></PhoneList>
        </Route>
        <Route path='/phones/add'>
          <PhoneForm></PhoneForm>
        </Route>
        <Route exact path='/phones/:id'>
          <PhoneDetails></PhoneDetails>
        </Route>
        <Route exact path='/phones/:id/edit'>
          <PhoneForm></PhoneForm>
        </Route>
      </Switch>
    </Router>
  );
}

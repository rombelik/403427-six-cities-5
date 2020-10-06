import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import Header from "../header/header";

const App = ({rentOffers}) => {

  return (<React.Fragment>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main rentOffers={rentOffers} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id">
          <Room />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.Fragment>);

};

App.propTypes = {
  rentOffers: PropTypes.number
};

export default App;

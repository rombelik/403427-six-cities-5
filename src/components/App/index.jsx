import React from "react";
import Main from '../Main';
import PropTypes from 'prop-types';

const App = ({rentOffers}) => {

  return (<React.Fragment>
    <Main rentOffers={rentOffers} />
  </React.Fragment>);
};

App.propTypes = {
  rentOffers: PropTypes.number
};

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = ({rentOffers}) => {

  return (<React.Fragment>
    <Main rentOffers={rentOffers} />
  </React.Fragment>);
};

App.propTypes = {
  rentOffers: PropTypes.number
};

export default App;

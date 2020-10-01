import React from "react";
import PropTypes from "prop-types";

const Main = ({rentOffers}) => {

  return (<React.Fragment>
    <p>You have {rentOffers} offers.</p>
  </React.Fragment>);
};

Main.propTypes = {
  rentOffers: PropTypes.number
};

export default Main;

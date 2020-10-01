import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';

const rentOffers = 5;

ReactDOM.render(
    <App rentOffers={rentOffers}/>,
    document.getElementById(`root`)
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const rentOffers = 5;

ReactDOM.render(
    <App rentOffers={rentOffers}/>,
    document.getElementById(`root`)
);

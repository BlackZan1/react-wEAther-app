import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Weather API/App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));

serviceWorker.unregister();

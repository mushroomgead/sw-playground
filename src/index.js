import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheet/main.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

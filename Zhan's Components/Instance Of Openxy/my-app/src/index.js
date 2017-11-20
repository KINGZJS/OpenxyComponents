import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './OpenxyMainPage';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<MainPage />, document.getElementById('root'));
registerServiceWorker();

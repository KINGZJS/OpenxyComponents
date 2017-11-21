import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './Layout'
// import App from './App';
// import HelloMessage from './HelloMessage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));
// ReactDOM.render(<HelloMessage />, document.querySelector('#root'));
registerServiceWorker();

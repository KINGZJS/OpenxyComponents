import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import MainPage from './OpenxyMainPage';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import LearningPage from './LearningPage'

ReactDOM.render(<LearningPage />, document.getElementById('root'));
registerServiceWorker();


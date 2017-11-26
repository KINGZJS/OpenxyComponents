import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './Layout'
import OpenxyLearningLayout from './OpenxyLearningLayout';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Layout />, document.getElementById('root'));

ReactDOM.render((<Router>
    <div>
        <Route exact path="/" component={Layout}/>
        <Route path="/openxyLearning" component={OpenxyLearningLayout}/>
    </div>
</Router>),document.getElementById('root'));
// ReactDOM.render(<HelloMessage />, document.querySelector('#root'));
registerServiceWorker();

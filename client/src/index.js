import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//part 1 - imported router via react router dom\\
import { BrowserRouter as Router, Route } from 'react-router-dom'
// end of my imports\\


ReactDOM.render(
    //wrapped router inside app\\
<Router>  
    <App />
</Router>
    //end of router wrap\\ 
, document.getElementById('root'));

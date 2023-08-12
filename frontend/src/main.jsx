import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom';
import '../src/index.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import '../node_modules/primereact/resources/themes/lara-light-indigo/theme.css';
// import '../node_modules/primereact/resources/themes/lara-dark-blue/theme.css';
import "../node_modules/primereact/resources/primereact.min.css";

import '../node_modules/primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)

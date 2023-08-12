import React from 'react'
import axios from 'axios'
import Landing from './components/Landing';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import PrivateAdmin from '../private/PrivateAdminRoutes';
import PrivateEmployeeRoutes from '../private/PrivateEmployeeRoutes';

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.post['Accept'] = "application/json";

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
})



function App() {
    return (
        <Router>
            <Switch>

                {/* Admin Routes */}
                 <PrivateAdmin path="/admin" name="Admin" />

                {/* Employee Routes */}
                <PrivateEmployeeRoutes path="/employee" name="Employee" />
                <Route path="/" name="Landing" render={(props) => <Landing {...props} />} />


            </Switch>
        </Router>
    )
}

export default App

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Dashboard} from "./pages/user-pages/Dashboard";
//
// const RoutesCaller = new RoutesCaller
ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);
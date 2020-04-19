import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage'
import AfterHours from './Pages/AfterHours'

$(document).ready(function(){
  $('.parallax').parallax();
});

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/albums" component={AfterHours} />
      </div>
    </Router>
  );
}

export default App;

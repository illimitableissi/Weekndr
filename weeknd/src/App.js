import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import FullPage from './Pages/FullPage'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
          <Route exact path= '/' component={HomePage} />
          <Route exact path= '/albums' component={FullPage} />
      </div>
    </Router>
  );
}

export default App;

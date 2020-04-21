import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './Pages/HomePage'
import FullPage from './Pages/FullPage'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
          <Link to= '/' component={HomePage} />
          <Link to= '/albums' component={FullPage} />
      </div>
    </Router>
  );
}

export default App;

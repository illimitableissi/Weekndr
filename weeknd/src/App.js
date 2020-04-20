import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import FullPage from './Pages/FullPage'

function App() {
  return (
    <Router>
      <div>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
          <Route exact path={process.env.PUBLIC_URL + '/' + 'albums'} component={FullPage} />
      </div>
    </Router>
  );
}

export default App;

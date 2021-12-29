import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import MarketingApp from './MarketingApp';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </Router>
  );
};

export default App;

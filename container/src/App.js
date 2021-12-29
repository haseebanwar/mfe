import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Header from './Header';
import MarketingApp from './MarketingApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co', // prefix classnames with 'co' in production
});

const App = () => {
  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;

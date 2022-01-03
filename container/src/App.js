import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Header from './Header';
import MarketingApp from './MarketingApp';
import AuthApp from './AuthApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co', // prefix classnames with 'co' in production
});

const App = () => {
  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;

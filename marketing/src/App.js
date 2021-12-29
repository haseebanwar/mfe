import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma', // prefix classnames with 'ma' in production
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/pricing" component={Pricing} exact />
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;

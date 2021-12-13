import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';

const App = () => {
  return (
    <StylesProvider>
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

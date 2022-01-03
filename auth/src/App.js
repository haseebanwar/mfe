import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Signin from './Signin';
import Signup from './Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au', // prefix classnames with 'au' in production
});

const App = (props) => {
  const { history, onSignIn } = props;

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin" exact>
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup" exact>
            <Signup onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;

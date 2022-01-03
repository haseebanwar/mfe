import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import ProgressBar from './ProgressBar';
import Header from './Header';

const AuthLazy = lazy(() => import('./AuthApp'));
const MarketingLazy = lazy(() => import('./MarketingApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co', // prefix classnames with 'co' in production
});

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isAuthenticated={isAuthenticated}
            onSignOut={() => setIsAuthenticated(false)}
          />
          <Suspense fallback={<ProgressBar />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy setIsAuthenticated={setIsAuthenticated} />
              </Route>
              <Route path="/">
                <MarketingLazy />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;

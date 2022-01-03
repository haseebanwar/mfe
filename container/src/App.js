import React, { lazy, Suspense } from 'react';
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
  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<ProgressBar />}>
            <Switch>
              <Route path="/auth" component={AuthLazy} />
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;

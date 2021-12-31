import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

const App = (props) => {

return (
  <div>
    <h1>this is auth app</h1>
  </div>
)

  return (

    <Router>
      <Switch>
        <Route path="/signin" component={} exact />
        <Route path="/signup" component={} exact />
      </Switch>
    </Router>

  )
}

export default App;
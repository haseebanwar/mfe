import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// mount function to start the app
const mount = (elem, options) => {
  const { onNavigate, defaultHistory, initialPath } = options;

  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    // call the navigation function in container whenever memory history of this app is updated
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, elem);

  return {
    onContainerNavigate: (containerLocation) => {
      const { pathname: nextPathname } = containerLocation;
      const { pathname } = history;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// if we are running this app in isolation and development, mount the app right away
if (process.env.NODE_ENV === 'development') {
  const elem = document.getElementById('iso-root-marketing');

  // assuming that element with id 'iso-root-marketing' only exists in this app's html file
  if (elem)
    mount(elem, {
      // using browser history in development and isolation
      defaultHistory: createBrowserHistory(),
    });
}

// otherwise, export the mount function so container can mount
export { mount };

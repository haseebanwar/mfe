import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount function to start the app
const mount = (elem) => {
  ReactDOM.render(<App />, elem);
};

// if we are running this app in isolation, mount the app right away
const elem = document.getElementById('iso-root');

// assuming that element with id 'iso-root' only exists in this app's html file
if (elem) mount(elem);

// otherwise, export the mount function so container can mount
export { mount };

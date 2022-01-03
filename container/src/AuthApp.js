import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthIndex';

const AuthApp = (props) => {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    const { onContainerNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: (location) => {
        const { pathname: nextPathname } = location;
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    // sync container location in auth app
    history.listen(onContainerNavigate);
  }, [history]);

  return <div ref={ref}></div>;
};

export default AuthApp;

import React, { useEffect, useRef } from 'react';
import { mount } from 'dashboard/DashboardIndex';

const AuthApp = (props) => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  }, [history]);

  return <div ref={ref}></div>;
};

export default AuthApp;

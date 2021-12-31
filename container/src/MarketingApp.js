import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'marketing/MarketingIndex';

const MarketingApp = (props) => {
  const ref = useRef();

  const history = useHistory();

  // effect for mounting marketing app
  useEffect(() => {
    const { onContainerNavigate } = mount(ref.current, {
      onNavigate: (location) => {
        const { pathname: nextPathname } = location;
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onContainerNavigate);
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;

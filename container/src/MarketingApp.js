import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingIndex';

const MarketingApp = (props) => {
  const ref = useRef();

  // effect for mounting marketing app
  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;

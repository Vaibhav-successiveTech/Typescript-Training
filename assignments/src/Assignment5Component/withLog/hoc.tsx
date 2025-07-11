'use client';

import { FC, useEffect } from 'react';

export default function withLog(InnerComp : FC) {
  function WithLog(props : {}) {

    useEffect(() => {
      console.log('Mounted');
      return () => console.log('Unmounted');
    }, []);

    useEffect(()=>{
        console.log('Updated');
    },[props])

    return <InnerComp {...props} />;
  }

  return WithLog;
}
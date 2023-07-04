import React, { useEffect, useRef } from 'react';

const PassageAuth = () => {
  const passageRef = useRef(null);

  useEffect(() => {
    if (passageRef.current) {
      passageRef.current.addEventListener(
        'passage-auth-complete',
        handleAuthComplete
      );
    }

    return () => {
      if (passageRef.current) {
        passageRef.current.removeEventListener(
          'passage-auth-complete',
          handleAuthComplete
        );
      }
    };
  }, []);

  const handleAuthComplete = (event) => {
    const { user } = event.detail;
    console.log('Authentication complete:', user);
  };

  return (
    <passage-auth
      ref={passageRef}
      app-id={process.env.REACT_APP_PASSAGE_APP_ID}
    ></passage-auth>
  );
};

export default PassageAuth;

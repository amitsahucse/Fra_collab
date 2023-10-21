import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  // Define a state variable
  const [myState, setMyState] = useState('initialValue');

  // Function to handle changes in the state variable
  const handleChange = (newValue) => {
    setMyState(newValue);
  };

  // Effect to store the state variable in localStorage
  useEffect(() => {
    localStorage.setItem('myState', myState);
  }, [myState]);

  return (
    <div>
      <h1>My Component</h1>
      <p>State Value: {myState}</p>
      <button onClick={() => handleChange('newValue')}>Change State</button>
    </div>
  );
};

export default MyComponent;
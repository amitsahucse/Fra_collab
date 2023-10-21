import React, { useState } from 'react';
import './SetBudget.css'; // Import your CSS file

const SetBudget = () => {
  const [budget, setBudget] = useState(100);

  const handleInputChange = (e) => {
    setBudget(e.target.value);
  };

  return (
    <div>
      <h4 className="budget-heading">Set Monthly Grocery Budget</h4>
      <div className="input-container">
  <input
    type="number"
    value={budget} 
    onChange={handleInputChange}
    className="budget-input"
    placeholder='Enter your monthly budget...'
  />
  
</div>

      <p>OR</p>
      <div className="slider-container">
        <div>Slide to set your monthly budget</div>
      <span className="slider-label">0</span>
        <input
          type="range"
          min="0"
          max="1000"
          value={budget}
          onChange={handleInputChange}
          className="budget-slider"
        />
          <span className="slider-label">{budget}€</span>
      </div>
      <div className="round-button">
                <span style={{color: 'black'}}>Save your Budget</span>
              </div>
    </div>
  );
};

export default SetBudget;

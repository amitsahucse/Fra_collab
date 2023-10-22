import React, {useState} from 'react';
import './SetBudget.css'; // Import your CSS file

const SetBudget = ({state, updateState}) => {
  const [budget, setBudget] = useState(100);

  const handleInputChange = (e) => {
    setBudget(e.target.value);
  };

  const showBudgetChart = () => {
    updateState({
      budget: {
        set: budget,
        spent: 47.5
      },
      nutrients: {
        initial: {
          Protein: 460,
          SaturatedFat: 389,
          Fat: 88,
          Carb: 3254,
          Sugar: 31,
          Fibre: 869
        },
        spent: {
          Protein: 100,
          SaturatedFat: 25,
          Fat: 69,
          Carb: 386,
          Sugar: 38,
          Fibre: 69
        }
      }
    });
  }

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
      <div className="round-button" onClick={showBudgetChart}>
        <span style={{color: '#002e3c'}}>Save your Budget</span>
      </div>
    </div>
  );
};

export default SetBudget;

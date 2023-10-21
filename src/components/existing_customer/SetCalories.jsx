import React, { useState, useRef } from 'react';
import setBudgetImage from '../../media/images/temp-set-monthly-calories.PNG'
import './SetCalories.scss'
import '../../App.scss'

const SetCalories = ({ state, updateState }) => {
  const proteinRef = useRef();
  const fatRef = useRef();
  const carbRef = useRef();
  const fibreRef = useRef();

  const updateNutrientsSet = () => {
    const updatedValues = {
      Protein: parseFloat(proteinRef.current.value),
      Fat: parseFloat(fatRef.current.value),
      Carb: parseFloat(carbRef.current.value),
      Fibre: parseFloat(fibreRef.current.value)
    };

    console.log("updatedValues ", updatedValues)

    updateState(prevState => ({
      ...prevState,
      nutrients: {
        ...prevState.nutrients,
        set: updatedValues
      }
    }));
  };

  const updateProteinValue = () => {
    const recommendedValues = {
      Protein: proteinRef.current.value,
      Fat: fatRef.current.value,
      Carb: carbRef.current.value,
      Fibre: fibreRef.current.value
    };

    updateState(prevState => ({
      ...prevState,
      nutrients: {
        ...prevState.nutrients,
        initial: recommendedValues
      }
    }));
  };

  return (
    <div>
      <h2>Recommended for you</h2>
      <table className="custom-table">
        <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>Recommendation</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td><input ref={proteinRef} type="text" placeholder={state.nutrients.set.Protein || ''}/></td>
          <td>|</td>
          <td>{state.nutrients.initial.Protein}g</td>
        </tr>
        <tr>
          <td>Fats</td>
          <td><input ref={fatRef} type="text" placeholder={state.nutrients.set.Fat || ''}/></td>
          <td>|</td>
          <td>{state.nutrients.initial.Fat}g</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td><input ref={carbRef} type="text" placeholder={state.nutrients.set.Carb || ''}/></td>
          <td>|</td>
          <td>{state.nutrients.initial.Carb}g</td>
        </tr>
        <tr>
          <td>Fibre</td>
          <td><input ref={fibreRef} type="text" placeholder={state.nutrients.set.Fibre || ''}/></td>
          <td>|</td>
          <td>{state.nutrients.initial.Fibre}g</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button className="round-button" onClick={updateNutrientsSet}>
              Set your choice
            </button>
          </td>
          <td></td>
          <td>
            <button className="round-button" onClick={updateProteinValue}>
              Set recommended breakup
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SetCalories;
import React, { useState, useEffect } from 'react';
import setBudgetImage from '../../media/images/temp-set-monthly-calories.PNG'
import './SetCalories.scss'
import '../../App.scss'

const SetCalories = () => {
  const [protein, setProtein] = useState('');
  const [fats, setFats] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fibre, setFibre] = useState('');
  
   const [userData, setUserData] = useState({
    userId: "",
    budget: {
      set: null,
      spent: null
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
      set: {
        Protein: null,
        SaturatedFat: null,
        Fat: null,
        Carb: null,
        Sugar: null,
        Fibre: null
      },
      spent: {
        Protein: null,
        SaturatedFat: null,
        Fat: null,
        Carb: null,
        Sugar: null,
        Fibre: null
      }
    }
  });

  const handleInputChange = (e, nutrient) => {
    const value = e.target.value;
    switch (nutrient) {
      case 'Protein':
        setProtein(value);
        break;
      case 'Fat':
        setFats(value);
        break;
      case 'Carb':
        setCarbs(value);
        break;
      case 'Fibre':
        setFibre(value);
        break;
      default:
        break;
    }
  };

  const updateProteinValue = () => {
    localStorage.setItem('Protein', protein);
    console.log(localStorage.getItem('Protein'));
    console.log(localStorage.getItem('Fat'));
    console.log(localStorage.getItem('Carb'));
    console.log(localStorage.getItem('Fibre'));
  };

  const updateNutrientsSet = () => {
    console.log("User data is ");
    console.log(localStorage.getItem('Protein'));
    console.log(localStorage.getItem('Fat'));
    console.log(localStorage.getItem('Carb'));
    console.log(localStorage.getItem('Fibre'));
    localStorage.setItem(fibre, userData);
  };

  useEffect(() => {
    const storedProtein = localStorage.getItem('Protein');
    const storedFat = localStorage.getItem('Fat');
    const storedCarb = localStorage.getItem('Carb');
    const storedFibre = localStorage.getItem('Fibre');

    setProtein(storedProtein || '');
    setFats(storedFat || '');
    setCarbs(storedCarb || '');
    setFibre(storedFibre || '');
  }, []);

  return (
    <div>
      <img src={setBudgetImage} alt="placeholder for monthly calories graph"/>
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
            <td><input type="text" placeholder={userData.nutrients.set.Protein || ''}  onChange={(e) => handleInputChange(e, 'Protein')}
  /></td>
            <td>|</td>
            <td>{userData.nutrients.initial.Protein}g</td>
          </tr>
          <tr>
            <td>Fats</td>
            <td><input type="text"  placeholder={userData.nutrients.set.Fat || ''}  onChange={(e) => handleInputChange(e, 'Fat')} /></td>
            <td>|</td>
            <td>{userData.nutrients.initial.Fat}g</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td><input type="text" placeholder={userData.nutrients.set.Carb || ''}   onChange={(e) => handleInputChange(e, 'Carb')} /></td>
            <td>|</td>
            <td>{userData.nutrients.initial.Carb}g</td>
          </tr>
          <tr>
            <td>Fibre</td>
            <td><input type="text" placeholder={localStorage.getItem('Fibre')}  onChange={(e) => handleInputChange(e, setFibre)} /></td>
            <td>|</td>
            <td>{userData.nutrients.initial.Fibre}g</td>
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
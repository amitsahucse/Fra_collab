import React, {useState, useEffect} from 'react';
import './ExistingCustomer.scss';
import graphImage from './temp_current-month-graph.PNG';
import caloriesImage from '../../media/images/temp_current-month-graph-calories.PNG'
import TabsComponent from "../shared/Tabs";
import Header from "../shared/Header";
import FileUploader from "../shared/FileUploader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend, ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

const ExistingCustomer = () => {
  const [areNutrientsFilled, setAreNutrientsFilled] = useState(false);
  const [state, setState] = useState({
    "userId": "",
    "budget": {
      "set": null,
      "spent": null
    },
    "nutrients": {
      "initial": {
        "Protein": 460,
        "SaturatedFat": 389,
        "Fat": 88,
        "Carb": 3254,
        "Sugar": 31,
        "Fibre": 869
      },
      "set": {
        "Protein": null,
        "SaturatedFat": null,
        "Fat": null,
        "Carb": null,
        "Sugar": null,
        "Fibre": null
      },
      "spent": {
        "Protein": null,
        "SaturatedFat": null,
        "Fat": null,
        "Carb": null,
        "Sugar": null,
        "Fibre": null
      }
    }
  });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

  const groupA = [50, 76, 351, 890, 32, 356];
  const groupB = [40, 56, 111, 620, 22, 400];


  const barData = {
    labels: ['Protein', 'SaturatedFat', 'Fat', 'Carb', 'Sugar', 'Fibre'],
    datasets: [
      {
        label: 'Consumed',
        data: groupA,
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // change the colors
        borderColor: 'rgba(255, 99, 132, 1)', // change the colors
        borderWidth: 1
      },
      {
        label: 'Planned',
        data: groupB,
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // change the colors
        borderColor: 'rgba(54, 162, 235, 1)', // change the colors
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          callback: function(value) {
            return value.toLocaleString();
          }
        }
      },
      x: {
        stacked: true
      }
    }
  };

  const pieData = {
    labels: ['Spent', 'Remaining'],
    datasets: [
      {
        data: [21, 79],
        backgroundColor: ['#FF6384', '#36A2EB'], // Colors for each sector
      }
    ]
  };

  useEffect(() => {
    const filled = Object.values(state.nutrients.spent).every(value => value !== null);
    setAreNutrientsFilled(filled);
    console.log("areNutrientsFilled ", areNutrientsFilled,
      "\nstate ", state);
  }, [state.nutrients.spent]);



  return (
    <>
    <Header />
    <div className="wrapper">
      {/*Top part*/}
      <div className="constant">
        <div className="top_section upload_section">
          <FileUploader
            state={state}
            updateState={(newState) => setState(prevState => ({ ...prevState, ...newState }))}
          />
          {/*<div className="upload_icon">+</div>*/}
          {/*<p className="upload_text">upload a file</p>*/}
        </div>
        <div className="top_section monthly-report_section budget-report">
          <div className="current-month_budget_graph">
            <Pie data={pieData} height={200} />
            {/*<img src={graphImage} alt="placeholder for monthly budget graph"/>*/}
          </div>
          <div className="current-month_budget_description">
            {/*<p className="remaining">Remaining <span className="remaining-value">100</span></p>*/}
            {/*<p className="exhausted">Spent <span className="spent-value">400</span></p>*/}
          </div>
        </div>
        <div className="top_section monthly-report_section nutrition-report">
          {areNutrientsFilled && <Bar options={options} data={barData} height={200} />}
        </div>
      </div>

      <TabsComponent
        updateState={(newState) => setState(prevState => ({ ...prevState, ...newState }))}
        state={state}
      />
    </div>
    </>
  );
};

export default ExistingCustomer;
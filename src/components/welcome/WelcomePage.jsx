import React from 'react';
import './WelcomePage.scss';
import '../../App.scss';
import step1 from '../welcome/welcomeMedia/Step1_0.jpeg';
import step2 from '../welcome/welcomeMedia/Step2_.png';
import step3 from '../welcome/welcomeMedia/Step3.png';
import Header from "../shared/Header";
import {Link} from "react-router-dom";


const WelcomePage = () => {
  return (
    <>
      <Header/>
      <div className="wrapper">
        <div className="content">
          <div className='welcomeNote'>
            <h1 className="welcome-note">
              Stay on top of <span style={{color: 'green'}}>Healthy</span> food budgeting
            </h1>
            <h1 className="welcome-note">
              In <span style={{color: 'green'}}>3</span> simple steps.
            </h1>


            <div className="round-button">
              <Link style={{color: 'black'}} to="/login">Here</Link>
            </div>
          </div>
          <div className='separator'></div>
          <div className="steps">
            <div className="step">
              <div className="round-button">
                <span style={{color: 'black'}}>1</span>
              </div>
              <h2>Scan your reciepts</h2>
              <img src={step1} alt="step2" style={{width: '300px', height: '300px'}}/>
            </div>
            <div className="step">
              <div className="round-button">
                <span style={{color: 'black'}}>2</span>
              </div>
              <h2>Scan your reciepts</h2>
              <img src={step2} alt="Step 2" style={{width: '300px', height: '300px'}}/>
            </div>
            <div className="step">
              <div className="round-button">
                <span style={{color: 'black'}}>3</span>
              </div>
              <h2>Scan your reciepts</h2>
              <img src={step3} alt="Step 3" style={{width: '300px', height: '300px'}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;

import React from 'react';
import './WelcomePage.scss';
import '../../App.scss';
import step1 from '../welcome/welcomeMedia/Step1_0.jpeg';
import step2 from '../welcome/welcomeMedia/Step2_.png';
import step3 from '../welcome/welcomeMedia/Step3.png';


const WelcomePage = () => {
    return (
        <div className="wrapper">
            <header className="header">
                <div className="logo">
                <span style={{ color: '#00ff00' }}>Nutri</span><span style={{ color:'#f8b700' }}>Wallet</span>
                </div>
                <div className="header-buttons">
                    <button className="login-button">Login</button>
                    <button className="signup-button">Sign Up</button>
                    
                </div>
            </header>
            <div className="content">
                <div className='welcomeNote'>
                <h1 className="welcome-note">
                    Stay on top of <span style={{ color: 'green' }}>Healthy</span>  food budgeting
                </h1>
                <h1 className="welcome-note">
                    In <span style={{ color: 'green' }}>3</span>  simple steps.
                </h1>
            
                <div className="round-button">
                <span style={{color:'black'}}>Here</span>
 
                </div>
                </div>
                <div className='separator'></div>
                <div className="steps">
                    <div className="step">
                        <div className="round-button">
                        <span style={{color:'black'}}>1</span>
                        </div>
                        <h2>Scan your reciepts</h2>
                        <img src={step1} alt="step2"style={{ width: '300px', height: '300px' }}/>
                    </div>
                    <div className="step">
                    <div className="round-button">
                        <span style={{color:'black'}}>2</span>
                        </div>
                        <h2>Scan your reciepts</h2>
                        <img src={step2} alt="Step 2" style={{ width: '300px', height: '300px' }}/>
                    </div>
                    <div className="step">
                    <div className="round-button">
                        <span style={{color:'black'}}>3</span>
                        </div>
                        <h2>Scan your reciepts</h2>
                        <img src={step3} alt="Step 3" style={{ width: '300px', height: '300px' }}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;

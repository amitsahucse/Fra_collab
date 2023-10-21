import React, {useState} from 'react';
import './ExistingCustomer.scss';
import graphImage from './temp_current-month-graph.PNG';
import caloriesImage from '../../media/images/temp_current-month-graph-calories.PNG'
import TabsComponent from "../shared/Tabs";
import Header from "../shared/Header";
import FileUploader from "../shared/FileUploader";

const ExistingCustomer = () => {

  return (
    <>
    <Header />
    <div className="wrapper">
      {/*Top part*/}
      <div className="constant">
        <div className="upload_section">
          <FileUploader />
          {/*<div className="upload_icon">+</div>*/}
          {/*<p className="upload_text">upload a file</p>*/}
        </div>
        <div className="monthly-report_section budget-report">
          <div className="current-month_budget_graph">
            {/*<img src={graphImage} alt="placeholder for monthly budget graph"/>*/}
          </div>
          <div className="current-month_budget_description">
            {/*<p className="remaining">Remaining <span className="remaining-value">100</span></p>*/}
            {/*<p className="exhausted">Spent <span className="spent-value">400</span></p>*/}
          </div>
        </div>
        <hr/>
        <br/>
        <br/>
        <br/>
        <div className="monthly-report_section nutrition-report">
          <img src={caloriesImage} alt="placeholder for monthly calories graph"/>
        </div>
      </div>

      {/*Bottom part*/}
      <TabsComponent></TabsComponent>
    </div>
    </>
  );
};

export default ExistingCustomer;
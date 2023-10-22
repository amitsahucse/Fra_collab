import React, { useState } from 'react';
import '../shared/Tabs.scss'
import nutri1 from './Graphdoubleimage.jpg'
function NutriAdvisor({ state, updateState }) {


  return (
    <div className="tabs_content">
      <div> <img src={nutri1} style={{height:'450px', marginLeft:"0px"}} /></div>
      
    </div>
  );
}

export default NutriAdvisor;

import React, { useState } from 'react';
import '../shared/Tabs.scss'
import purchaseAnalysisImage from "./PurchaseAnalysis.jpg"

function PurchaseAnalysis({ state, updateState }) {


  return (
    <div className="tabs_content">
      <img src={purchaseAnalysisImage} style={{height:'300px'}}/>
    </div>
  );
}

export default PurchaseAnalysis;

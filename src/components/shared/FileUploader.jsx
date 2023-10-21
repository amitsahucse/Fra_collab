import React, { useState } from 'react';
import './FileUploader.scss'

function FileUploader() {
  const [data, setData] = useState({
    budget: null,
    nutrients: null
  });
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Maybe later
  };

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setData({
          budget: {
            MonthlyBudgetSpent: 47.50
          },
          nutrients: {
            Protein: 550,
            SaturatedFat: 430,
            Fat: 100,
            Carb: 3000,
            Sugar: 30,
            Fibre: 840
          }
        });
      }, 5000); // еще 5 seconds
    }, 5000); // первые 5 seconds
  };

  return (
    <div>
      {/*<button onClick={() => document.getElementById("fileInput").click()}>*/}
      {/*  Choose a file*/}
      {/*</button>*/}
      <div className="upload-button" onClick={() => document.getElementById("fileInput").click()}>

      </div>
      {/*<button onClick={handleUpload}>*/}
      {/*  Upload*/}
      {/*</button>*/}
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleUpload}
        // onChange={handleFileChange}
      />
      <div>
        {data.budget && (
          <div>
            <p>You've already spent {data.budget.MonthlyBudgetSpent}€</p>
            <p>Now set the goals</p>
          </div>
        )}
        {isUploading && <p>Is being recognized...</p>}
        {isProcessing && <p>Magic happens...</p>}
      </div>
    </div>
  );
}

export default FileUploader;
import React, { useState } from 'react';
import './FileUploader.scss'

function FileUploader({ updateState }) {
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

        setData(prevData => ({
          ...prevData,
          nutrients: {
            ...prevData.nutrients,
            spent: {
              Protein: 100,
              SaturatedFat: 25,
              Fat: 69,
              Carb: 386,
              Sugar: 38,
              Fibre: 69
            }
          }
        }));

        updateState({
          nutrients: {
            spent: {
              Protein: 100,
              SaturatedFat: 25,
              Fat: 69,
              Carb: 386,
              Sugar: 38,
              Fibre: 69
            },
            initial: {
              Protein: 460,
              SaturatedFat: 389,
              Fat: 88,
              Carb: 3254,
              Sugar: 31,
              Fibre: 869
            }
          }
        });
      }, 5000);
    }, 5000);
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
// CalculatorDisplay.js
import React, { useState, useEffect } from 'react';

const CalculatorDisplay = (props) => {
    const [Input, setInput] = useState('');
  
    useEffect(() => {
      setInput(props.value || ''); 
    }, [props.value]);
  

  return (
    <div className='container mb-4'>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="mt-5">
          <input
            className="form-control shadow-lg border-1 rounded-3 bg-light"
            id="inputFeild"
            rows="3"
            disabled
            value={Input} 
          />
        </div>
      </div>
    </div>
  );
};

export default CalculatorDisplay;

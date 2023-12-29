import React from 'react';
import CalculatorBtn from './CalculatorBtn';

const Calculator = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
        <h3 className="card-title text-center mb-4">
            <span className="text-primary">Math</span> Magician <span className="text-danger">Calculator</span>
          </h3>
          <CalculatorBtn />
        </div>
      </div>
    </div>
  );
};

export default Calculator;

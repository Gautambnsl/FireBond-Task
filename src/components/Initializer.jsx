import React, { useState } from 'react';
import { initializeCall, resetCall } from "../Middleware/integration"

const Initializer = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValue);
    await initializeCall(inputValue);
    setInputValue('');
  };

  async function handleReset(){
    await resetCall();
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter No. of Rounds"
          className="input-field"
        />
        <button type="submit" className="submit-button">
        Initialize 
        </button>
        <button onClick={handleReset} className="reset-button">
            Reset Contract
        </button>
      </form>

      <style jsx>{`
        .form {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }

        .input-field {
          padding: 10px;
          border: 2px solid #4caf50;
          border-radius: 4px;
          font-size: 16px;
          outline: none;
        }

        .submit-button {
          background-color: #4caf50;
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin-left: 10px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #45a049;
        }

        .reset-button {
            margin : 3px;
    background-color: #f44336;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .reset-button:hover {
    background-color: #e53935;
  }
      `}</style>
    </div>
  );
};

export default Initializer;

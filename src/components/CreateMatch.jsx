import React, { useState } from 'react';
import { initializeCall, resetCall , createMatchCall} from "../Middleware/integration"


const CreateMatch = () => {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');

  const handleTeam1Change = (e) => {
    setTeam1(e.target.value);
  };

  const handleTeam2Change = (e) => {
    setTeam2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Team 1:', team1);
    console.log('Team 2:', team2);
    createMatchCall(team1,team2);
    setTeam1('');
    setTeam2('');
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={team1}
          onChange={handleTeam1Change}
          placeholder="Enter Team 1 Name"
          className="team-input"
        />
        <input
          type="text"
          value={team2}
          onChange={handleTeam2Change}
          placeholder="Enter Team 2 Name"
          className="team-input"
        />
        <button type="submit" className="submit-button">
          Create Match
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

        .team-input {
          padding: 10px;
          margin: 5px;
          font-size: 16px;
          border-radius: 4px;
          outline: none;
        }

        .submit-button {
          background-color: #4caf50;
          border: none;
          color: white;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default CreateMatch;

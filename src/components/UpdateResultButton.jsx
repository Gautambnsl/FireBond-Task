import React, { useState } from 'react';
import { initializeCall, resetCall , createMatchCall, updateMatchResultCall} from "../Middleware/integration"


const UpdateResultButton = () => {
  const [matchId, setMatchId] = useState('');
  const [teamAScore, setTeamAScore] = useState('');
  const [teamBScore, setTeamBScore] = useState('');

  const handleMatchIdChange = (e) => {
    setMatchId(e.target.value);
  };

  const handleTeamAScoreChange = (e) => {
    setTeamAScore(e.target.value);
  };

  const handleTeamBScoreChange = (e) => {
    setTeamBScore(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform any action with the match ID, team A score, and team B score here
    console.log('Match ID:', matchId);
    console.log('Team A Score:', teamAScore);
    console.log('Team B Score:', teamBScore);
    await updateMatchResultCall(matchId,teamAScore,teamBScore);
    setMatchId('');
    setTeamAScore('');
    setTeamBScore('');
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type="text"
          value={matchId}
          onChange={handleMatchIdChange}
          placeholder="Match ID"
          className="input-field"
        />
        <input
          type="text"
          value={teamAScore}
          onChange={handleTeamAScoreChange}
          placeholder="Team A Score"
          className="input-field"
        />
        <input
          type="text"
          value={teamBScore}
          onChange={handleTeamBScoreChange}
          placeholder="Team B Score"
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Update Result
        </button>
      </form>

      <style jsx>{`

      .form{
        margin: 10px;
      }
        .input-field {
          padding: 10px;
          margin: 5px;
          font-size: 16px;
          border-radius: 4px;
          outline: none;
          display: block;
          margin: 0 auto;
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
          display: block;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default UpdateResultButton;

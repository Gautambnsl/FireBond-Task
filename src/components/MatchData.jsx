import React, { useState, useEffect } from 'react';
import { initializeCall, resetCall , createMatchCall, updateMatchResultCall, MatchDataCall} from "../Middleware/integration"


const MatchData = () => {
  const [matchData, setMatchData] = useState([]);

  function hexToDecimal(hex) {
    var decimal = 0;
    var hexDigits = "0123456789ABCDEF";
    
    hex = String(hex).toUpperCase();
    
    for (var i = 0; i < hex.length; i++) {
      var currentDigit = hexDigits.indexOf(hex[i]);
      decimal = decimal * 16 + currentDigit;
    }
    
    return decimal;
  }

  // Simulated function to fetch match data
  const fetchMatchData = async () => {
    let data = await MatchDataCall();
    console.log(data);
    // const simulatedMatchData = [
    //   {
    //     matchId: 1,
    //     round: 1,
    //     teamA: 'Team A',
    //     teamB: 'Team B',
    //     teamAScore: 3,
    //     teamBScore: 2,
    //     isFinished: true
    //   },
    //   {
    //     matchId: 2,
    //     round: 1,
    //     teamA: 'Team C',
    //     teamB: 'Team D',
    //     teamAScore: 1,
    //     teamBScore: 1,
    //     isFinished: false
    //   },
    // ];

    setMatchData(data);
  };

  useEffect(() => {
    fetchMatchData();
  }, []);

  return (
    <div className="match-data-container">
      {matchData.map((match, index) => (
        <div key={index} className="match-item">
          <h3 className="match-title">Match ID: {parseInt(match.matchId._hex, 16)}</h3>
          <p className="match-info">Round: {parseInt(match.round._hex, 16)}</p>
          <div className="team-container">
            <div className="team-info">
              <span className="team-label">Team A:</span>
              <span className="team-name">{match.teamA}</span>
            </div>
            <div className="team-info">
              <span className="team-label">Team B:</span>
              <span className="team-name">{match.teamB}</span>
            </div>
          </div>
          <div className="score-container">
            <div className="score-info">
              <span className="score-label">Team A Score:</span>
              <span className="score-value">{
                parseInt(match.teamAScore._hex, 16)
              }
                </span>
            </div>
            <div className="score-info">
              <span className="score-label">Team B Score:</span>
              <span className="score-value">{
                parseInt(match.teamBScore._hex, 16)
              }</span>
            </div>
          </div>
          <p className={`status-info ${parseInt(match.isFinished, 16) ? 'finished' : 'not-finished'}`}>
            {match.isFinished ? 'Finished' : 'Not Finished'}
          </p>
        </div>
      ))}

      <style jsx>{`
        .match-data-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
        }

        .match-item {
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin-bottom: 20px;
          width: 400px;
        }

        .match-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #222222;
        }

        .match-info {
          font-size: 16px;
          margin-bottom: 10px;
          color: #666666;
        }

        .team-container {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .team-info {
          display: flex;
          align-items: center;
        }

        .team-label {
          font-size: 14px;
          font-weight: bold;
          margin-right: 5px;
          color: #666666;
        }

        .team-name {
          font-size: 14px;
          color: #222222;
        }

        .score-container {
          display: flex;
          justify-content: space-between;
        }

        .score-info {
          display: flex;
          align-items: center;
        }

        .score-label {
          font-size: 14px;
          font-weight: bold;
          margin-right: 5px;
          color: #666666;
        }

        .score-value {
          font-size: 14px;
          color: #222222;
        }

        .status-info {
          font-size: 14px;
          margin-top: 10px;
          text-transform: uppercase;
          font-weight: bold;
        }

        .finished {
          color: #57bb8a;
        }

        .not-finished {
          color: #fca72c;
        }
      `}</style>
    </div>
  );
};

export default MatchData;


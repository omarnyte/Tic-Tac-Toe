import React from 'react';

export default function ScoreBoard(props) {
    return (
        <div className="scoreboard-div">
            <div className="player-score-div">
                <span>Player:</span>
                <span className="player-score">{ props.humanScore }</span>
            </div>
            <div className="AI-score-div">
                <span>Computer:</span>
                <span className="AI-score">{ props.AIScore }</span>
            </div>
        </div>
    );
} 
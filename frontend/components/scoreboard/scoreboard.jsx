import React from 'react';
import PropTypes from 'prop-types';

function ScoreBoard(props) {
    return (
        <div className="scoreboard-div">
            <div className="player-score-div">
                <span className="player-score">{`Player: ${ props.humanScore }`}</span>
            </div>
            <div className="AI-score-div">
                <span className="AI-score">{`Computer: ${ props.AIScore }`}</span>
            </div>
        </div>
    );
} 

ScoreBoard.propTypes = {
    AIScore: PropTypes.number.isRequired,
    humanScore: PropTypes.number.isRequired
}

export default ScoreBoard;
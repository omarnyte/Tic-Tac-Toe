import React from 'react';

export default class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="scoreboard-div">
                <div className="player-score-div">
                    <span>Player:</span>
                    <span className="player-score">{this.props.humanScore}</span>
                </div>
                <div className="AI-score-div">
                    <span>Computer:</span>
                    <span className="AI-score">{this.props.AIScore}</span>
                </div>
            </div>
        )
    }

} 
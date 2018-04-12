import React from 'react';

export default class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userScore: 0,
            AIScore: 0
        }
    }

    render() {
        return (
            <div className="scoreboard-div">
                <div className="player-score-div">
                    <span>Player:</span>
                    <span className="player-score">{this.state.userScore}</span>
                </div>
                <div className="AI-score-div">
                    <span>AI:</span>
                    <span className="AI-score">{this.state.AIScore}</span>
                </div>
            </div>
        )
    }

} 
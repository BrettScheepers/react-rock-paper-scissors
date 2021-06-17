import React from 'react'

const Header = ({score}) => {
    return (
        <header className="header">
            <ul className="header-list">
                <h6>Rock</h6>
                <h6>Paper</h6>
                <h6>Scissors</h6>
                <h6>Lizard</h6>
                <h6>Spock</h6>
            </ul>
            <div className="header-score-tag">
                <p>Score</p>
                <h2 className="score">{score}</h2>
            </div>
        </header>
    )
}

export default Header
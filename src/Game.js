/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import options from './Options'

const Game = ({playerPick, score, setScore}) => {
    const history = useHistory()
    const [housePick, setHousePick] = useState(options[Math.floor(Math.random()*options.length)])
    console.log(housePick)
    const [result, setResult] = useState('')
    const [isHidden, setIsHidden] = useState(true)

    const updateScore = () => {
        setScore((score) => score + 1)
    }
    
    const calculateResult = () => {
        setTimeout(() => {
             if (housePick.name === playerPick.name) {
                setResult('DRAW')
                setIsHidden(false)
                return
             }
             else if (playerPick.strong.includes(housePick.name)) {
                // updateScore()
                setResult('WIN')
                setIsHidden(false)
                return
             }
             else {
                setResult('LOSE')
                setIsHidden(false)
                return
             }
        }, 2000)
        console.log(result)
    }

   useEffect(() => {
        calculateResult();
   }, [])


    return (
        <div className="game-wrapper">
            <div className="game">
                <div className="player-pick">
                    <p>You picked</p>
                    <div className={`base ${ result === "WIN" ? `won` : ''}`}>
                        <div className={`game-token token ${playerPick.name}`}>
                            <div className="white-space">
                                <div className="svg-container">
                                    <img src={playerPick.img.src} alt={playerPick.img.alt} className="icon-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="house-pick">
                    <p>The House picked</p>
                    <div className={`base ${ result === "LOSE" ? `won` : ''}`}>
                        <div className={`game-token token ${housePick.name} ${isHidden ? `hide` : ``}`}>
                            <div className="white-space">
                                <div className="svg-container">
                                    <img src={housePick.img.src} alt={housePick.img.alt} className="icon-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`game-info ${isHidden ? `hide` : ``}`}>
                    <h1>You {result}</h1>
                    <button className="btn btn-play-again"
                        onClick={() => history.goBack()}
                    >Play Again</button>
                </div>
            </div>
        </div>
    )
}

export default Game

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useHistory } from 'react-router-dom'
import Rock from './images/icon-rock.svg'
import Paper from './images/icon-paper.svg'
import Scissors from './images/icon-scissors.svg'
import Lizard from './images/icon-lizard.svg'
import Spock from './images/icon-spock.svg'
import options from './Options'

const Home = ({playerPick, setPlayerPick}) => {
    const history = useHistory()

    const displayPick = (id) => {
        setPlayerPick(options[parseFloat(id)])
        setTimeout(() => {
            history.push('/game')
        }, 300)
    }

    return (
        <section className="home-wrapper">
            <div className="home">
                <div className="rock rock-home home-token token" id="0"
                    onClick={(e) => displayPick(e.currentTarget.id)}
                >
                    <div className="white-space">
                        <div className="svg-container">
                            <img src={Rock} alt="" className="icon-img" />
                        </div>
                    </div>
                </div>
                <div className="paper paper-home home-token" id="1"
                    onClick={(e) => displayPick(e.currentTarget.id)}
                >
                    <div className="white-space">
                        <div className="svg-container">
                            <img src={Paper} alt="" className="icon-img" />
                        </div>
                    </div>
                </div>
                <div className="scissors scissors-home home-token" id="2"
                    onClick={(e) => displayPick(e.currentTarget.id)}
                >
                    <div className="white-space">
                        <div className="svg-container">
                            <img src={Scissors} alt="" className="icon-img" />
                        </div>
                    </div>
                </div>
                <div className="lizard lizard-home home-token" id="3"
                    onClick={(e) => displayPick(e.currentTarget.id)}
                >
                    <div className="white-space">
                        <div className="svg-container">
                            <img src={Lizard} alt="" className="icon-img" />
                        </div>
                    </div>
                </div>
                <div className="spock spock-home home-token" id="4"
                    onClick={(e) => displayPick(e.currentTarget.id)}
                >
                    <div className="white-space">
                        <div className="svg-container">
                            <img src={Spock} alt="" className="icon-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home

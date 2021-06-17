import React , { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Game from './Game'

function App() {
  const [score, setScore] = useState(0)
  const [playerPick, setPlayerPick] = useState(null)

  return (
    <>
      <Header score={score} />
      <Switch>
        <Route path="/" exact component={() => <Home playerPick={playerPick} setPlayerPick={setPlayerPick} />} />
        <Route path="/game" exact component={() => <Game score={score} setScore={setScore} playerPick={playerPick} />} />
      </Switch>
      <button className="btn btn-rules">Rules</button>
    </>
  );
}

export default App;

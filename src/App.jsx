import { useEffect, useState } from 'react'
import './App.css'
import TopBar from './TopBar'
import Grid from './Grid';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function resetScore(){
    setScore(0);
  }

  function incrementScore(){
    setScore(score + 1);
  }

  useEffect(() => {
    if(score > highScore){
      setHighScore(score);
    }
  }, [score, highScore])

  return (
    <>
      <TopBar score={score} highScore={highScore}></TopBar>
      <Grid resetScore={resetScore} incrementScore={incrementScore}></Grid>
    </>
  )
}

export default App

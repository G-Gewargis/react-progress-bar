import { useState } from 'react'
import './App.css'
import ProgressBar from './ProgressBar'

export default function App() {
  const [progress, setProgress] = useState(0);
  function increaseProgress() {
    let currentProgress = progress;
    if (currentProgress === 100) {
      alert("Maximum Progress has been reached!");
    }
    else {
      setProgress(currentProgress + 10);
    }
  };

  const decreaseProgress = () => {
    let currentProgress = progress;
    if (currentProgress === 0) {
      alert("Minimum Progress has been reached!");
    }
    else {
      setProgress(currentProgress - 10);
    }
  };


  return (
    <div>
      <ProgressBar progress={progress} />
      <button onClick={increaseProgress}> Increase Progress </button> 
      <br></br>
      <br></br>
      <button onClick={decreaseProgress}> Decrease Progress </button>
    </div>
  )
}

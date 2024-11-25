import React, { useEffect, useState } from 'react'

const TimerTwo = () => {
    const [timer, setTimer] = useState(10);
    var timeRef = null;
    const startTimer = () => {
        setTimer(10);
    }
    const pauseTimer = () => {
        clearInterval(timeRef);
    
    }
    const resetTimer = () => {
        clearInterval(timeRef);
        setTimer(10);
    }

    useEffect(() => {
        timeRef = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        if(timer == 0){
            clearInterval(timeRef);
        }

        return () => {
            clearInterval(timeRef)
        }
    } , [timer])
  return (
    <div>
        <div>{timer}</div>
        <div>
            <button onClick={startTimer} >Start</button>
            <button onClick={resetTimer} >Reset</button>
            <button onClick={pauseTimer} >Pause/Resume</button>

        </div>
    </div>
  )
}

export default TimerTwo
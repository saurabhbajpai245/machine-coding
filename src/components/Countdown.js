import React, { useEffect, useState } from 'react'

const Countdown = () => {
    const [timer, setTimer] = useState(5);
    const [isRunning, setIsRuning] = useState(false);

    useEffect(() => {
        if(isRunning){
            const intervalId = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000)
            if(timer <= 0){
                clearInterval(intervalId);
                setIsRuning(false);
            }

            return () => clearInterval(intervalId)
        }
    }, [isRunning, timer])

    const startTimer = () => {
        setIsRuning(true);
    }
    const pauseTimer = () => {
        setIsRuning(false)
    }
    const resetTimer = () => {
        setIsRuning(false);
        setTimer(10);
    }
    const resumeTimer = () => {
        setIsRuning(true);
    }

  return (
    <div>
        <div>{timer}</div>
        <div>
            <button onClick={startTimer}>{} Start</button>
            <button onClick={resumeTimer}>Resume</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    </div>
  )
}

export default Countdown
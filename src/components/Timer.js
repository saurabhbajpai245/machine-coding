import React, { useEffect, useReducer, useRef, useState } from 'react';
const Timer = () => {
    const [timer, setTimer] = useState(10);
    const timerRef = useRef(null);
    const startTimer = () => {
        if(!timerRef.current){
            timerRef.current = setInterval(() => {
                setTimer((prev) => prev - 1)
            }, 1000)
        }
    }
    const handleTimerEvents = (eventType) => {
        switch(eventType){
            case 'Start' : 
                startTimer();
                break;
            case 'Pause' : 
                clearInterval(timerRef.current);
                timerRef.current = null;
                break;
            default : 
                // Reset
                clearInterval(timerRef.current);
                timerRef.current = null;
                setTimer(10);
                startTimer();
        }
    }
    useEffect(() => {
        if(timer == 0){
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, [timer])
    return (
    <div>
        <div>{timer}</div>
        <div>
            <button onClick={() => handleTimerEvents('Start')}>Start</button>
            <button onClick={() => handleTimerEvents('Reset')}>Reset</button>
            <button onClick={() => handleTimerEvents('Pause')}>Pause</button>
        </div>
    </div>
    )
}
export default Timer;
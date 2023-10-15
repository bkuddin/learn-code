import { useEffect, useState } from 'react';
import './CountdownTimer.css';
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="countdown-timer">
            <span className="two-numbers">{remainingTime.days}days</span>
            <span>:</span>
            <span className="two-numbers">{remainingTime.hours}h</span>
            <span>:</span>
            <span className="two-numbers">{remainingTime.minutes}m</span>
            <span>:</span>
            <span className="two-numbers">{remainingTime.seconds}s</span>
     
        </div> 
    );
}

export default CountdownTimer;
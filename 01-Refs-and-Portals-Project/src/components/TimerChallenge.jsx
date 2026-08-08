import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerStopped, settimerStopped] = useState(false);
    const [timePassed, setTimePassed] = useState(0);
    const intervalId = useRef();

    const handleStartChallenge = () => {

        if (timerStarted) {
            clearInterval(intervalId.current);
            settimerStopped(true);
        }

        setTimerStarted(true);

        if (!timerStarted) {
            intervalId.current = setInterval(() => {
                setTimePassed((prev) => prev + 1);
            }, 4)
        }

        setTimeout(() => {
            settimerStopped(true);
            clearInterval(intervalId.current);
        }, targetTime * 1000);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerStopped
                ? timePassed < ((targetTime * 1000) / 4)
                    ? <p>You won!</p>
                    : <p>You lost!</p>
                : ''}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <button
                onClick={handleStartChallenge}
            >
                {!timerStopped ? 'Start challenge' : 'End challenge'}
            </button>
            <p className={timerStarted ? 'active' : ''}>
                {timePassed}
            </p>
        </section>
    )
}
import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerStopped, settimerStopped] = useState(false);
    const [timePassed, setTimePassed] = useState(0);
    const intervalId = useRef();
    const modalRef = useRef(null);

    const handleStartChallenge = () => {

        if (timerStarted) {
            clearInterval(intervalId.current);
            settimerStopped(true)
            modalRef.current.showModal();
        }

        setTimerStarted(true);

        if (!timerStarted) {
            intervalId.current = setInterval(() => {
                setTimePassed((prev) => prev + 1);
            }, 4)
        }

        setTimeout(() => {
            clearInterval(intervalId.current);
            settimerStopped(true);
            modalRef.current.showModal();
        }, targetTime * 1000);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            <ResultModal
                ref={modalRef}
                result={timePassed < ((targetTime * 1000) / 4) ? 'won' : 'lost'}
                targetTime={targetTime}
                timePassed={timePassed}
            />
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
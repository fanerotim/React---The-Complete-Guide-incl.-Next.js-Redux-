import { useState, useRef } from "react";

export default function Player() {

    const name = useRef();
    const [playerName, setPlayerName] = useState()

    return (
        <section id="player">
            <h2>Welcome {playerName ?? 'Unknown'}</h2>
            <p>
                <input
                    ref={name}
                    type="text"
                />
                <button onClick={() => setPlayerName(name.current.value)}>Set Name</button>
            </p>
        </section>
    );
}

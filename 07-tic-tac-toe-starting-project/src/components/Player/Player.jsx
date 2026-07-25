import { useState } from "react"

export default function Player({name, symbol, isActive, onEditName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    const onEditHandler = () => {
        setIsEditing((prev) => !prev);

        if (isEditing) {
            onEditName(playerName, symbol);
        }
    }

    return (
        <li className={isActive ? 'active': ''}>
            <span className="player">
                {isEditing 
                ? <input
                    name="name"
                    type="text" 
                    onChange={(e) => setPlayerName((oldName) => e.target.value)}
                    value={playerName}
                />
                :  <span className="player-name">{playerName}</span>
                }
                
                <span className="player-symbol">{symbol}</span>
            </span>
            <button 
                onClick={onEditHandler}
            >
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    )
}
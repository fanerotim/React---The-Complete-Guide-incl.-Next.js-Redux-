import Player from "./components/Player/Player"
import Log from "./components/Log/Log"
import GameBoard from "./components/GameBoard/GameBoard"
import GameOver from "./components/GameOver/GameOver"
import { useEffect, useState } from "react"
import { checkForWinner } from "./helpers/checkForWinner"

const PLAYER_NAMES = {
  playerOne: {
    name: 'Petar',
    symbol: 'X'
  },
  playerTwo: {
    name: 'Maria',
    symbol: 'O'
  }
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const hasWinner = gameTurns && checkForWinner(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';
      
      if (prevTurns?.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex
          },
          player: currentPlayer,
      },
      ]
      return prevTurns ? [...updatedTurns, ...prevTurns] : updatedTurns;
    })
  }

  const onEditName = (playerName, symbol) => {
      Object.values(PLAYER_NAMES).map((player) => player.symbol === symbol ? player.name = playerName : '');
    }

  return (
    <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player name={PLAYER_NAMES.playerOne.name} onEditName={onEditName} symbol={PLAYER_NAMES.playerOne.symbol} isActive={gameTurns && gameTurns[0]?.player === 'X'}/>
            <Player name={PLAYER_NAMES.playerTwo.name} onEditName={onEditName} symbol={PLAYER_NAMES.playerTwo.symbol} isActive={gameTurns && gameTurns[0]?.player === 'O'}/>
          </ol>
          {hasWinner && <GameOver winner={hasWinner} onHandleRematch={setGameTurns} playerNames={PLAYER_NAMES}/>}
          <GameBoard 
            onSelectSquare={handleSelectSquare} 
            turns={gameTurns}
            />
        </div>  
        <Log turns={gameTurns}/>
    </main>
  )
}

export default App

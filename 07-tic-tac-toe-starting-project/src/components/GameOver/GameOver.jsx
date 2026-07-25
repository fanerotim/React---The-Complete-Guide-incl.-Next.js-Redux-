export default function GameOver({winner, onHandleRematch, playerNames}) {

    const winnerObj = Object.values(playerNames).filter((player) => player.symbol === winner.player);

    return (
        <div id="game-over">
            <h2>Game Over!</h2>
                <p>
                {winner.winner 
                ? `${winnerObj[0].name} won!`
                : `It's a draw!`}
            <button onClick={() => {
                onHandleRematch((prevTurns) => {
                    [];
                })
            }}>
                    Rematch!
            </button>
            </p>
        </div>
    )
}
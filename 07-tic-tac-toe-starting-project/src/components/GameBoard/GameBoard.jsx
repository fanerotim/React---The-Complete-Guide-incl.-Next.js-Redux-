import { useEffect, useState } from "react";

let initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSelectSquare, turns}) {
    turns && turns.map((turn) => {
        initialGameBoard[turn.square.row][turn.square.col] = turn.player;
    })

    if (!turns) {
        initialGameBoard = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // const onSelectSquareHandle = (rowIndex, colIndex) => {
    //     let newGameBoard = [];

    //     // My solution of updating the array
    //     for (let i = 0; i < gameBoard.length; i++) {
    //         if (i === rowIndex) {
    //             for (let k = 0; k < gameBoard[i].length; k++) {
    //                 if (k === colIndex) {
    //                     gameBoard[i][k] = symbol;
    //                     newGameBoard[i] = gameBoard[i]
    //                 }
    //             }
    //         }
    //         newGameBoard[i] = gameBoard[i];
    //     }
    //     setGameBoard(() => newGameBoard);
        
    //     // Course solution of cloning the array below
    //     // const clonedArray = [...gameBoard.map(innerArray => [...innerArray])];
    //     // clonedArray[rowIndex][colIndex] = 'X';
    //     // setGameBoard(clonedArray);
    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => (
                <li 
                    key={rowIndex}
                >
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    disabled={turns?.find(turn => turn.square.row === rowIndex && turn.square.col === colIndex)}
                                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}
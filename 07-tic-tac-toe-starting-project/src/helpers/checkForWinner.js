export const checkForWinner = (turns) => {
    if (turns.length) {
        let leftDiagonal = [];
        let rightDiagonal = [];

        let leftDiagonalUp = [];
        let counter = 2;

        for (let i = 0; i < turns.length; i++) {
            const row = turns.filter((turn) => turn.square.row === i);       
            const rowWinnerX = row.length === 3 && row.every((turn) => turn.player === 'X');
            const rowWinnerO = row.length === 3 && row.every((turn) => turn.player === 'O');
            
            const col = turns.filter((turn) => turn.square.col === i);
            const colWinnerX = col.length === 3 && col.every((turn) => turn.player === 'X');
            const colWInnerO = col.length === 3 && col.every((turn) => turn.player === 'O');

            const curDiagonalPiece = turns.find((turn) => turn.square.row === i && turn.square.col === i);
            curDiagonalPiece && leftDiagonal.push(curDiagonalPiece);

            const curRightDiagonalPiece = turns.find((turn) => turn.square.row === counter && turn.square.col === counter);
            curRightDiagonalPiece && rightDiagonal.push(curRightDiagonalPiece);
            
            const leftDiagonalPieceBottom = turns.find((turn) => turn.square.row === counter && turn.square.col === i);
            leftDiagonalPieceBottom && leftDiagonalUp.push(leftDiagonalPieceBottom);

            counter--;

            if (rowWinnerX ||
                colWinnerX
            ) {
                return {
                    winner: true,
                    player: 'X'
                }
            } else if (
                rowWinnerO ||
                colWInnerO
            ) {
                return {
                    winner: true,
                    player: 'O'
                }
            }
        }

        const leftDiagonalWinnerX = leftDiagonal.length === 3 && leftDiagonal.every((turn) => turn.player === 'X');
        const leftDiagonalWinnerO = leftDiagonal.length === 3 && leftDiagonal.every((turn) => turn.player === 'O');

        const rightDiagonalWinnerX = rightDiagonal.length === 3 && rightDiagonal.every((turn) => turn.player === 'X');
        const rightDiagonalWinnerO = rightDiagonal.length === 3 && rightDiagonal.every((turn) => turn.player === 'O');

        const leftDiagonalUpWinnerX = leftDiagonalUp.length === 3 && leftDiagonalUp.every((turn) => turn.player === 'X');
        const leftDiagonalUpWinnerO = leftDiagonalUp.length === 3 && leftDiagonalUp.every((turn) => turn.player === 'O');

        if (leftDiagonalWinnerX ||
            rightDiagonalWinnerX ||
            leftDiagonalUpWinnerX
        ) {
            return {
                winner: true,
                player: 'X'
            }
        } else if(
            leftDiagonalWinnerO ||
            rightDiagonalWinnerO || 
            leftDiagonalUpWinnerO
        ) {
            return {
                winner: true,
                player: 'O'
            }
        }
    }

    if (turns.length == 9) {
        return {
            winner: false,
            draw: true
        };
    }
}
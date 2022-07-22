import React, { useState } from 'react';
import styled from 'styled-components'

import Square from './square';

const Board = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #363635;
    border-left: 1px solid #363635;
`;

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [isPlayer1, setIsPlayer1] = useState(true);
    const [winner, setWinner] = useState(null);

    // creates new array of history
    // based on currentMove
    const getNewHistory = () => {
        let newHistory = history.slice();
        if (currentMove !== (history.length - 1)) {
            newHistory = history.slice(0, currentMove + 1);
        }
        return newHistory;
    };

    // checks the winner of the game
    const checkWinner = board => {
         const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a])
            }
        }
    };

    // handles the click function of each
    // square box
    const handleMark = index => {
        //check if there is a winner
        if (winner !== null) return null;

        const newHistory = getNewHistory();
        const newBoard = newHistory[newHistory.length - 1].slice();

        // check if square is already populated
        // and do nothing if true
        if (newBoard[index] !== null) return null;

        newBoard[index] = isPlayer1 ? 'X' : 'O';
        newHistory.push(newBoard);

        setCurrentMove(newHistory.length - 1);
        setHistory(newHistory);
        setIsPlayer1(!isPlayer1);
        checkWinner(newBoard);
    };

    // changes to the chosen board state
    const goToMove = index => {
        setCurrentMove(index);
        console.log('old history: ', history);
    };

    return (
        <div>
            <p>Player {isPlayer1 ? 'X' : 'O'}&apos;s turn</p>
            {winner && `Winner is player ${winner}`}
            <Board>
                {history[currentMove].map((item, index) => {
                    return (
                        <Square
                            key={`test-${index}`}
                            state={item}
                            onClick={() => handleMark(index)}
                        />
                    )
                })}
            </Board>
            <ol>
                {history.map((_, index) => (
                    <li key={`move-${index}`}>
                        <button type="button" onClick={() => goToMove(index)}>
                            {index > 0 ? <>Move {index}</> :<> Game Start </>}
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Game;
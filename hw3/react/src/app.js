/*
1. For the current move only, show “You are at move #…” instead of a button.
2. Rewrite Board to use two loops to make the squares instead of hardcoding them.
3. Add a toggle button that lets you sort the moves in either ascending or descending order.
4. When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).
5. Display the location for each move in the format (row, col) in the move history list.
*/

import { useCallback, useState } from "react";

function Square({ value, isWinner, onSquareClick }) {
  let textColor="black";
  let backColor="white";
  if (isWinner) {
     textColor = "white"
     backColor = "black"
  }
  return (
    <button className="square" 
      onClick={onSquareClick} 
      style={{ 
        backgroundColor: `${backColor}`, 
        color: `${textColor}`
     }}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    console.log(`square ${i} was clicked`)
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner= calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const rows = 3;
  const cols = 3;
  const BoardElement = [];

  for (let curRow = 0; curRow < rows; curRow++) {
    const rowSquares = [];
    
    for (let curCol = 0; curCol < cols; curCol++) {
      const squareIndex = curRow * rows + curCol; 
      
      rowSquares.push(
        <Square
          key={'square'+squareIndex}
          value={squares[squareIndex]}
          isWinner={false}
          onSquareClick={() => handleClick(squareIndex)}
        />
      );
    }

    BoardElement.push(
      <div key={'row'+curRow} className="board-row">
        {rowSquares}
      </div>
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      {BoardElement}
    </>
  );
}

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [isReversed, setReverse] = useState(true);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  let moves = history.map((squares, move) => {
    let element;
    if (move > 0) {
      element = (
        <button onClick={() => jumpTo(move)}> Go to move # {move} </button>
      );
    } else {
      element = (
        <button onClick={() => jumpTo(move)}> Go to game start </button>
      );
    }
    return <li key={move}>{element}</li>;
  });

  const reverseFlag=false;

  function onReverseClick(reverseFlag) {
    console.log("reverseFlag is "+reverseFlag)
    return !reverseFlag;
  }

  if (isReversed) { 
    moves = [...moves].reverse() 
  } 

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div key="CurrentMove">you are at move #{currentMove + 1}</div>
        <button className="reverseButton" onClick={() => setReverse(!isReversed)}>Reverse Move List?</button>
        <ol reversed={reverseFlag} start='0' >
          {moves}
        </ol>
      </div>
    </div>
  );
}

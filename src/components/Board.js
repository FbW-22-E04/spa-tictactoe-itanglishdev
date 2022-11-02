import Square from './Square'
import {Fragment} from 'react'

function Board() {
    const renderSquare = (i) => {
      return <Square />;
    };
   
  
  const status = "Next player: X";
  
  return (
    <Fragment>
      <div className="status h2 text-center">{status}</div>
      <div className="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </Fragment>
  );
  }
  export default Board
  
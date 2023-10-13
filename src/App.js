import { useState } from 'react';
import './App.css';

let round = 0;
const wins = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,5,9],
  [3,5,7],
  [1,4,7],
  [2,5,8],
  [3,6,9]
]


function Square(){
  const [clicked, setClicked] = useState(false)
  const [value, setValue] = useState(null)
  function onClick(){
    console.log(clicked)
    if(clicked) return
    setValue(round % 2 === 0 ? 'x' : 'o')
    round++;
    setClicked(true)
  }
  return <button className='square' onClick={onClick}>{value}</button>
}

function Squares(round){
  const squares = []
  for(let i = 1; i<=9; i++){
    if(i % 3 == 0){
      squares.push(
      <div className='board-row'>
      <Square></Square>
      </div>)
    }else{
    squares.push(<Square></Square>)
  }}
  return <>{squares}</>
}

function Board() {
  const [round, setRound] = useState(0);
  return (
    <>
    <h1>It's {round % 2 == 0? 'x' : 'o'}'s turn</h1>
      <Squares round={round}></Squares>    
    </>
  );
}

export default Board;


// Player array
import React from "react"; 
import Lop from "./Lop";
import Sb70 from "./Sb70";
import { Ops } from "./Ops";
import { Eps } from "./Eps";
import Lis from "./Lis";
const players = [
  { name: 'Player1', score: 65 },
  { name: 'Player2', score: 85 },
  { name: 'Player3', score: 45 },
  { name: 'Player4', score: 95 },
  { name: 'Player5', score: 25 },
  { name: 'Player6', score: 75 },
  { name: 'Player7', score: 55 },
  { name: 'Player8', score: 60 },
  { name: 'Player9', score: 80 },
  { name: 'Player10', score: 35 },
  { name: 'Player11', score: 90 },
];

// Indian team array
const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

function App() {
  const flag = true; // Change to false to view the alternate component

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <Lop players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Sb70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          {Ops(IndianPlayers)}
          <hr />
          <h1>Even Players</h1>
          {Eps(IndianPlayers)}
        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged:</h1>
          <Lis IndianPlayers={IndianPlayers} />
        </div>
      </div>
    );
  }
}

export default App;

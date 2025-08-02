import React from "react";
const Lis = ({ IndianPlayers }) => {
  return (
    <div>
      {IndianPlayers.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </div>
  );
};

export default Lis;

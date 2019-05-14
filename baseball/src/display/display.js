import React from 'react'
import 'react-testing-library/cleanup-after-each';


    const Display = props => {
        const { player, balls, strikes, fouls } = props.BatterUp;
        return (
          <div className="Display stuffs">
            <li data-testid="player">BatterUp: {player}</li>
            <li data-testid="balls">Balls: {balls}</li>
            <li data-testid="strikes">Strikes: {strikes}</li>
            <li data-testid="fouls">Fouls: {fouls}</li>
          </div>
        );
      };
      


export default Display
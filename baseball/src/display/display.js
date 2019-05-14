import React from 'react'



    const Display = props => {
        const { player, balls, strikes, fouls } = props.atBat;
        return (
          <div className="Display stuffs">
            <li data-testid="player">At-bat: {player}</li>
            <li data-testid="balls">Balls: {balls}</li>
            <li data-testid="strikes">Strikes: {strikes}</li>
            <li data-testid="fouls">Fouls: {fouls}</li>
          </div>
        );
      };
      


export default Display
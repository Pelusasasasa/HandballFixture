import { useState } from 'react';
import '../css/game.css';
import { GameEstadisticas } from './GameEstadisticas';

export const Game = ({id,date,status,teams,scores}) => {

      const [game,setGame] = useState(id);

      let time = '';
      if (status.short === "NS") {
        time = date.slice(11,16);
      }else{
        time = status.short;
      }

  return (
        <>
          <main id={id} className='estadistica'>
              <div className="home" id={teams.home.id}>
                <p className='score'>{scores.home}</p>
                <img src={teams.home.logo} alt={teams.home.name} />
              </div>
              <p className='time'>{time}</p>
              <div className="away" id={teams.away.id}>
                <img src={teams.away.logo} alt={teams.away.name} />
                <p className='score'>{scores.away}</p>
              </div>
          </main>
        </>
  )
}
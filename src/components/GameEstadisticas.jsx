import { useFetchGameForId } from "../hooks/useFetchGameForId";
import {game} from '../data/Game';
import '../css/GameEstadistica.css'

export const GameEstadisticas = ({id}) => {
    
    const {date,teams,scores} = game.response;
    const {home,away} = teams
  //useFetchGameForId(id)
  return (
    <main className="gameEstadistica">
        <div className="head">
          
        </div>
        <div className="teams">
          <div className="team1">
            <img src={home.logo} alt={home.name} />
            <h3>{home.name}</h3>
          </div>
          <div className="info">
            <h2>{date.slice(0,10).split('-',3).reverse().join('/')} {date.slice(11,19)}</h2>
            <p className="score">{scores.home} - {scores.away}</p>
          </div>
          <div className="team2">
            <img src={away.logo} alt={away.name} />
            <h3>{away.name}</h3>
          </div>
        </div>
    </main>
  ) 
};

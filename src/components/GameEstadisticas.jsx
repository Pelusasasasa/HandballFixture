import { useFetchGameForId } from "../hooks/useFetchGameForId";
import '../css/GameEstadistica.css'

export const GameEstadisticas = ({id}) => {
  
  //Si se ejecuto antes de hacer un click no no strae nada
  if (id === -1) {
    return;
  }

  const {game} = useFetchGameForId(id);
  
  //Si el juego es un objeto vacion no retorna nada
  if (Object.keys(game).length === 0) {
    return;
  };

  const {date,teams,scores,league,country,status,periods} = game ? game : {};
  const {home,away} = teams ? teams : {};
  
  return (
    <main className="gameEstadistica">
        <div className="head">
          <img src={league.logo} alt={league.name} />
          <h1>{league.name}</h1>
          <p>Season - {league.season}</p>
        </div>

        <div className="teams">
          <div className="team1">
            <img src={home.logo} alt={home.name} />
            <h3>{home.name}</h3>
          </div>

          <div className="info">
            <h2>{date.slice(0,10).split('-',3).reverse().join('/')} {date.slice(11,19)}</h2>
            <p className="score">{scores.home} - {scores.away}</p>
            <p className="status">{status.long}</p>
          </div>

          <div className="team2">
            <img src={away.logo} alt={away.name} />
            <h3>{away.name}</h3>
          </div>

        </div>

        <div className="score">
          <h3>Score</h3>
          <div>
            <p className="score-team-name"></p>
            <p>T</p>
            <p>P1</p>
            <p>P2</p>
          </div>
          <div>
            <p className="score-team-name">{teams.home.name}</p>
            <p>{scores.home}</p>
            <p>{periods.first.home}</p>
            <p>{periods.second.home}</p>
          </div>
          <div>
            <p className="score-team-name">{teams.away.name}</p>
            <p>{scores.away}</p>
            <p>{periods.first.away}</p>
            <p>{periods.second.away}</p>
          </div>

        </div>
    </main>
  ) 
};

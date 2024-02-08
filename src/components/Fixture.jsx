import { useFetchGames, useFetchLeagues } from '../hooks'
import { Game } from "./Game";
import { Menu } from "./Menu";
import { GameEstadisticas } from "./GameEstadisticas";

import "../css/fixture.css";

export const Fixture = () => {

const {games} = useFetchGames('2024-01-29');
const {leagues} = useFetchLeagues();

const displayGame = () => {
  
}

  return (
    <section className="fixture">
        {/* <div>
            <Menu leagues={leagues}/>
        </div>
        <div>
            {
                games.map( elem => (
                  <div key={elem[0].id}>
                    <div className="liga">
                        <img src={elem[0].league.logo} alt="" />
                        <h1>{elem[0].league.name}</h1>
                    </div>
                    {elem.map(game => (
                        <Game key={game.id} {...game}/>
                    ))}
                  </div>
                ))
            }
        </div> */}
        <div id='game' className="none">
          <GameEstadisticas id='153219'/>
        </div>
    </section>
  )
}
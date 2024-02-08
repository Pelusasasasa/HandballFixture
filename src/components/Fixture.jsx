import { useFetchGames } from "../hooks/useFetchGames";
import { Game } from "./Game";
import "../css/fixture.css";
import { useFetchLeagues } from "../hooks/useFetchLeagues";
import { Menu } from "./Menu";
import { GameEstadisticas } from "./GameEstadisticas";

export const Fixture = () => {

const {games} = useFetchGames('2024-01-29');
const {leagues} = useFetchLeagues();

  return (
    <section className="fixture">
        <div>
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
        </div>
        <div className="none">
          <GameEstadisticas id='153219'/>
        </div>
    </section>
  )
}
import { useFetchGames, useFetchLeagues } from '../hooks'
import { Game } from "./Game";
import { Menu } from "./Menu";
import { GameEstadisticas } from "./GameEstadisticas";
import { useState } from 'react';

import "../css/fixture.css";

export const Fixture = () => {

const [gameDisplay, setGameDisplay] = useState(-1);
const [mostrarGame, setMostrarGame] = useState(false);

const {games} = useFetchGames('2024-02-14');
const {leagues} = useFetchLeagues();

const displayGame = (id) => {
  setGameDisplay(id);
  console.log("a")
  setMostrarGame(true);
}
const cerrarGame = () => {
  setMostrarGame(false);
};

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
                        <Game key={game.id} {...game} displayGame={displayGame}/>
                    ))}
                  </div>
                ))
            }
        </div>
        {
          mostrarGame && <div id='game' onClick={cerrarGame}><GameEstadisticas id={gameDisplay}/></div>
        }
    </section>
  )
}
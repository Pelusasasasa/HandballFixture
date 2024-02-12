import { useFetchGames, useFetchLeagues } from '../hooks'
import { Game } from "./Game";
import { Menu } from "./Menu";
import { GameEstadisticas } from "./GameEstadisticas";

import "../css/fixture.css";
import { useState } from 'react';

export const Fixture = () => {

const [gameDisplay, setGameDisplay] = useState(-1);

const {games} = useFetchGames('2024-02-12');
const {leagues} = useFetchLeagues();

const displayGame = (id) => {
  setGameDisplay(id);
  document.getElementById('game').classList.remove('none');
}

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
        <div id='game' className='none'>
          <GameEstadisticas id={gameDisplay}/>
        </div>
    </section>
  )
}
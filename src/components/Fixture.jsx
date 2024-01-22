import { useFetchGames } from "../hooks/useFetchGames";
import { Game } from "./Game";
import "../css/fixture.css";

export const Fixture = () => {

const {games} = useFetchGames('2024-01-22');
let gamesReducidos = [];
games.sort( (a,b) => {

    if (a.leagueName > b.leagueName) {
        return 1;
    }else if(a.leagueName < b.leagueName){
        return -1;
    }
    return 0;

});

if (games.length > 0) {
    const resultado = games.reduce((acumulador,game) => {
        

        if(!acumulador[game.leagueName]){
            acumulador[game.leagueName] = [];
        }

        acumulador[game.leagueName].push(game);

        return acumulador;
    }, {});

    gamesReducidos = Object.values(resultado);
    console.log(gamesReducidos)
}

  return (
    <section className="fixture">
        <div>
            Menu
        </div>
        <div>
            {
                gamesReducidos.map( elem => (
                    console.log('hola')
                ))
            }
        </div>
    </section>
  )
}
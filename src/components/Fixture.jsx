import { useFetchGames } from "../hooks/useFetchGames";
import { Game } from "./Game";
import "../css/fixture.css";

export const Fixture = () => {

const {games} = useFetchGames('2024-01-23');
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
        

        if(!acumulador[game.league.name]){
            acumulador[game.league.name] = [];
        }

        acumulador[game.league.name].push(game);

        return acumulador;
    }, {});

    gamesReducidos = Object.values(resultado);
}

  return (
    <section className="fixture">
        <div>
            Menu
        </div>
        <div>
            {
                gamesReducidos.map( elem => (
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
    </section>
  )
}
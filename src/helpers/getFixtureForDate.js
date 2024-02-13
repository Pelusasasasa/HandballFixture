import axios from "axios"

const API_KEY = 'c743390c2b691ef922b56447758aa2be';
const API_HOST = 'v1.handball.api-sports.io';
const URL = 'https://v1.handball.api-sports.io/games';

export const getFixtureForDate = async(date) => {
    
    let gamesReducidos = [];

    //Traemos los juegos
    const data = (await axios.get(`${URL}?date=${date}`,{
        headers: {
            'x-rapidapi-host': API_HOST,
            'x-rapidapi-key': API_KEY
        }
    })).data;

    //Retornamos los atributos que nos interesan
    const games = data.response.map(game => (
        {
            id: game.id,
            date: game.date,
            league:{
                name: game.league.name,
                logo: game.league.logo,
            },
            status:{
                short: game.status.short,
                long: game.status.long,
            },
            teams:{
                away:{
                    id: game.teams.away.id,
                    name: game.teams.away.name,
                    logo: game.teams.away.logo,
                },
                home:{
                    id: game.teams.home.id,
                    name: game.teams.home.name,
                    logo: game.teams.home.logo,
                }
            },
            scores: {
                home: game.scores.home,
                away: game.scores.away,
            }
        }
    ));

    //Ordenalos los juegos por nombre de ligas
    games.sort( (a,b) => {

        if (a.leagueName > b.leagueName) {
            return 1;
        }else if(a.leagueName < b.leagueName){
            return -1;
        }
        return 0;

    });

    //seParamos en un arreglo de arreglos dependiendo de la liga
    if (games.length > 0) {
        const resultado = games.reduce((acumulador,game) => {
            

            if(!acumulador[game.league.name]){
                acumulador[game.league.name] = [];
            }

            acumulador[game.league.name].push(game);

            return acumulador;
        }, {});

        gamesReducidos = Object.values(resultado);
    };

    return gamesReducidos;
}
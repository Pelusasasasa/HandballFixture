import axios from "axios"

const API_KEY = 'c743390c2b691ef922b56447758aa2be';
const API_HOST = 'v1.handball.api-sports.io';
const URL = 'https://v1.handball.api-sports.io/games';



export const getFixtureForDate = async(date) => {
    const data = (await axios.get(`${URL}?date=${date}`,{
        headers: {
            'x-rapidapi-host': API_HOST,
            'x-rapidapi-key': API_KEY
        }
    })).data;

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
                    name: game.teams.away.name,
                    logo: game.teams.away.logo,
                },
                home:{
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

    return gamesReducidos;
}
import axios from "axios"
const URL = 'https://v1.handball.api-sports.io/games';

export const getFixtureForDate = async(date) => {
    const data = (await axios.get(`${URL}?date=${date}`,{
        headers: {
            'x-rapidapi-host': 'v1.handball.api-sports.io',
            'x-rapidapi-key': 'c743390c2b691ef922b56447758aa2be'
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
    ))

    return games;
}
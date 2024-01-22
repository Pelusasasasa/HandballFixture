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
            leagueLogo: game.league.logo,
            leagueName: game.league.name,
            statusShort: game.status.short,
            statusLong: game.status.long,
            teamAwayName: game.teams.away.name,
            teamAwayLogo: game.teams.away.logo,
            teamHomeName: game.teams.home.name,
            teamHomeLogo: game.teams.home.logo,
            scoresAway: game.scores.away,
            scoresHome: game.scores.home,
        }
    ))

    return games;
}
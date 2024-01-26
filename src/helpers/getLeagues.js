import axios from "axios"

const API_KEY = 'c743390c2b691ef922b56447758aa2be';
const API_HOST = 'v1.handball.api-sports.io';
const URL = 'https://v1.handball.api-sports.io/leagues';

export const getLeagues = async() => {
    let leagues = [];
    const data = (await axios.get(`${URL}`,{
        headers:{
            'x-rapidapi-host': API_HOST,
            'x-rapidapi-key': API_KEY
        }
    }
    )).data.response;

    if(data.length > 0){
        leagues = data.reduce((acumulador, league) => {
            if(!acumulador[league.country.name]){
                acumulador[league.country.name] = [];
            };

            acumulador[league.country.name].push(league);

            return acumulador;
        },{});
    };

    return leagues;


}
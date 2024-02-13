import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = 'c743390c2b691ef922b56447758aa2be';
const API_HOST = 'v1.handball.api-sports.io';
const URL = 'https://v1.handball.api-sports.io/';

export const useFetchGameForId = (id) => {
    const [game,setGame] = useState({});
    const getGame = async(id) => {

        const res = (await axios.get(`${URL}games?id=${id}`,{
            headers:{
                'x-rapidapi-host': API_HOST,
                'x-rapidapi-key': API_KEY
            }
        })).data.response;

        setGame(res[0]);
    };

    useEffect(() => {
        getGame(id)
    },[]);

  return {
    game
    }
};
import { useEffect, useState } from 'react';
import { getLeagues } from '../helpers/getLeagues';

export const useFetchLeagues = () => {
    const [leagues, setLeagues] = useState([]);

    const getLigas = async() => {
        const ligas = await getLeagues();
        setLeagues(Object.values(ligas));
    };

    useEffect(() => {
        getLigas();
    },[]);

    return {
        leagues
    };
};
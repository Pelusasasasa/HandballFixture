import { useEffect } from 'react';
import { useState } from 'react';
import { getFixtureForDate } from '../helpers/getFixtureForDate';

export const useFetchGames = (date) => {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    const newGames = await getFixtureForDate(date);
    setGames(newGames);
  }

  useEffect( () => {
    getGames();
  }, []);

  return {
    games
  };
}

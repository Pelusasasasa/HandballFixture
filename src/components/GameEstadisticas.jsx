import { useFetchGameForId } from "../hooks/useFetchGameForId";

export const GameEstadisticas = ({id}) => {
  const game = {
      "id": 153219,
      "date": "2024-01-29T14:00:00+00:00",
      "time": "14:00",
      "timestamp": 1706536800,
      "timezone": "UTC",
      "week": null,
      "status": {
          "long": "Finished",
          "short": "FT"
      },
      "country": {
          "id": 29,
          "name": "Russia",
          "code": "RU",
          "flag": "https://media.api-sports.io/flags/ru.svg"
      },
      "league": {
          "id": 91,
          "name": "Superleague",
          "type": "League",
          "logo": "https://media.api-sports.io/handball/leagues/91.png",
          "season": 2023
      },
      "teams": {
          "home": {
              "id": 861,
              "name": "Perm",
              "logo": "https://media.api-sports.io/handball/teams/861.png"
          },
          "away": {
              "id": 860,
              "name": "Krasnodar",
              "logo": "https://media.api-sports.io/handball/teams/860.png"
          }
      },
      "scores": {
          "home": 36,
          "away": 33
      },
      "periods": {
          "first": {
              "home": 17,
              "away": 14
          },
          "second": {
              "home": 19,
              "away": 19
          }
      }
  }
    console.log(game)
  //useFetchGameForId(id)
  return (
    <div>
      Hola
    </div>
  )
};

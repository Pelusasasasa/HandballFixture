import '../css/game.css';

export const Game = ({id,date,status,teams,scores}) => {
      let time = '';
      if (status.short === "NS") {
        time = date.slice(11,16);
      }else{
        time = status.short;
      }


  return (
        <div id={id} className='estadistica'>
            <p className='score'>{scores.home}</p>
            <img src={teams.home.logo} alt={teams.home.name} />
            <p className='time'>{time}</p>
            <img src={teams.away.logo} alt={teams.away.name} />
            <p className='score'>{scores.away}</p>
        </div>
  )
}
import '../css/game.css';

export const Game = ({id,date,leagueLogo,leagueName,statusShort,statusLong,scoresHome,scoresAway,teamHomeLogo,teamAwayLogo,teamAwayName,teamHomeName}) => {
        
  return (
    <div id={id}>
        <div className="liga">
            <img src={leagueLogo} alt={leagueName} />
            <h1>{leagueName}</h1>
            <img src={leagueLogo} alt={leagueName} />
        </div>
        <div className='estadistica'>
            <p className='score'>{scoresHome}</p>
            <img src={teamHomeLogo} alt={teamHomeName} />
            <p className='time'>{statusShort}</p>
            <img src={teamAwayLogo} alt={teamAwayName} />
            <p className='score'>{scoresHome}</p>
        </div>
    </div>
  )
}
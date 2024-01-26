import { MenuItem } from "./MenuItem";

export const Menu = ({leagues}) => {
    
  return (
    <div>
      {
        leagues.map((data) => (
          <div>
            <div>
              <img src={data[0].country.flag} alt={data[0].country.id} />
              <h1>{data[0].country.name}</h1>
            </div>
            {
              data.map((league) => (
                <MenuItem league={league}/>
              ))
            }
          </div>
        ))
      }
    </div>
  )
};

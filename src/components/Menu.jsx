import { MenuItem } from "./MenuItem";
import "../css/menu.css";
export const Menu = ({leagues}) => {
  return (
    <div className="menu">
      {
        leagues.map((data) => (
          <div key={data[0].country.name}>
            <div className="menu-titulo">
              <img src={data[0].country.flag} alt={data[0].country.id} />
              <h2>{data[0].country.name}</h2>
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

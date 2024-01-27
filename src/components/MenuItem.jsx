import '../css/menu.css';

export const MenuItem = ({league}) => {
  return (
    <p id={league.id} className="menu-item">{league.name}</p>
  )
};
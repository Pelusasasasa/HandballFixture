import '../css/menu.css';

export const MenuItem = ({league}) => {
  return (
    <div className='menu-item'>
      <img src={league.logo} alt={league.name} />
      <p id={league.id} className="menu-item-texto">{league.name}</p>
    </div>
  )
};
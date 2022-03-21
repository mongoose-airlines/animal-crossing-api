import { Link } from "react-router-dom";

const Villager = ({ villager }) => {
  return (
    <>
      <Link
        to='/villager'
        state={{villager}}
        className='card-link'
      >
        <div style={{backgroundColor: villager['text-color'], color: villager['bubble-color']}} className="villager">
          <img src={villager.icon_uri} alt="villager" />
          <h3>
            {villager.name['name-USen']}</h3>
        </div>
      </Link>
    </>
  );
}

export default Villager;
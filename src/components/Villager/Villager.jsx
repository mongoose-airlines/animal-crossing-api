import { Link } from "react-router-dom";

const Villager = ({ villager }) => {
  return (
    <>
      <Link
        to='/villager'
        state={{villager}}
        className='card-link'
      >
        <div style={{backgroundColor: villager['bubble-color'], color: villager['text-color']}} className="villager">
          <img src={villager.image_uri} alt="villager" />
          <h3>
            {villager.name['name-USen']}</h3>
        </div>
      </Link>
    </>
  );
}

export default Villager;
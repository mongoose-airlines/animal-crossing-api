import { Link } from "react-router-dom";

const Villager = ({ villager, handleAddVillager }) => {
  return (
    <>
        <div style={{backgroundColor: villager['text-color'], color: villager['bubble-color']}} className="villager">
        <Link
          to='/villager'
          state={{villager}}
          className='card-link'
        >
          <img src={villager.icon_uri} alt="villager" />
        </Link>
          <h3>
            {villager.name['name-USen']}
          </h3>
          <button onClick={() => handleAddVillager(villager)} className="btn" style={{'backgroundColor': villager['bubble-color']}}>Add to Collection</button>
        </div>
    </>
  );
}

export default Villager;
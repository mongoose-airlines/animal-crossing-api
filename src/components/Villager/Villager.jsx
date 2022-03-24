import { Link } from "react-router-dom";

const Villager = ({ villager, handleRemoveVillager, handleAddVillager, profile }) => {
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
          {profile.villagers.some(profileVillager => profileVillager.name === villager.name['name-USen'])  ?
          <button onClick={() => handleRemoveVillager(villager.name['name-USen'])} className="btn" style={{'backgroundColor': villager['bubble-color']}}>Remove</button>
          :
          <button onClick={() => handleAddVillager(villager)} className="btn" style={{'backgroundColor': villager['bubble-color']}}>Add to Collection</button>
          }
          
        </div>
    </>
  );
}

export default Villager;
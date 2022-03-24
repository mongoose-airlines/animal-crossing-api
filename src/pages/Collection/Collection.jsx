import Villager from "../../components/Villager/Villager";
import { Link } from "react-router-dom";

const Collection = ({profile, handleAddVillager, handleRemoveVillager}) => {
  return (
    <>
      <h1  style={{'textDecoration': 'underline'}}>My Things</h1>
      <h2>My Villagers</h2>
      <div className="villager-container">
      {profile.villagers.map(villager =>
          <div style={{backgroundColor: villager.text_color, color: villager.bubble_color}} className="villager">
          <Link
            to='/villager'
            state={{villager}}
            className='card-link'
          >
            <img src={villager.icon_uri} alt="villager" />
          </Link>
            <h3>
              {villager.name}
            </h3>
            {profile.villagers.some(profileVillager => profileVillager.name === villager.name)  ?
            <button onClick={() => handleRemoveVillager(villager.name)} className="btn" style={{'backgroundColor': villager.bubble_color}}>Remove</button>
            :
            <button onClick={() => handleAddVillager(villager)} className="btn" style={{'backgroundColor': villager.bubble_color}}>Add to Collection</button>
            }
            
          </div>
        )}
      </div>
    </>
  );
}

export default Collection;
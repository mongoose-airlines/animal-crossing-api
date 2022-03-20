import { useLocation } from "react-router-dom";

const VillagerDetails = () => {
  const location = useLocation()
  const villager = location.state.villager
  
  return (
    <>
      <div style={{backgroundColor: villager['bubble-color'], color: villager['text-color']}} className="villager">
        <img src={villager.image_uri} alt="villager" />
        <h3>
          {villager.name['name-USen']} the {villager.species} is {villager.personality}</h3>
        <h3 style={{color: villager['text-color']}}>"{villager['catch-phrase']}"</h3>
      </div>
    </>
  );
}
 
export default VillagerDetails;
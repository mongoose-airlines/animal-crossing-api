import { useLocation } from "react-router-dom";

const FishDetails = () => {
  const location = useLocation()
  const fish = location.state.fish
  
  return (
    <>
      <h2>Fish Details</h2>
      <img src={fish.image_uri} alt="fish" />
      <h3>{fish.name['name-USen']}</h3>
      <h3>{fish.price} 🔔</h3>
      <p>{fish['museum-phrase']}</p>
    </>
  );
}
 
export default FishDetails;